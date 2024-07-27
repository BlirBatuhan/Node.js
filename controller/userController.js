import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ user: user._id });
    } catch (error) {
      console.log('ERROR', error);
  
      let errors2 = {};
  
      if (error.code === 11000) {
        errors2.email = 'The Email is already registered';
      }
  
      if (error.name === 'ValidationError') {
        Object.keys(error.errors).forEach((key) => {
          errors2[key] = error.errors[key].message;
        });
      }
  
      res.status(400).json(errors2);
    }
  };

const loginUser = async (req,res) => {
    try {
        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        let same = false;
        if(user){
            // Kullanıcı bulunduysa şifreleri karşılaştırıyoruz.
            same = await bcrypt.compare(password,user.password);
        }
        else{
            // Kullanıcı bulunamadıysa hata döndürüyoruz.
           return res.status(401).json({succeded:false, error:"There is no user with that name"});
        }

        if(same){
            const token = createToken(user._id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 86400000 // 24 saat
            });
            res.redirect('/users/dashboard');
        }
        else{
            // Şifre eşleşmiyorsa hata döndürüyoruz.
            res.status(401).json({succeded:false, error:"Wrong password"});
        }
    } catch (error) {
        res.status(500).json({succeded:false, error});
    }
};

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    } )
};

const getDashboardPage = (req,res) => { res.render('dashboard',{
    link: "dashboard"
}); };

export {createUser,loginUser, getDashboardPage};