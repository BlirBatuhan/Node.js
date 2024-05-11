import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const createUser = async (req,res) => {
    try {
        const user = await User.create(req.body);
    res.status(201).json({succeded: true, user});
    } catch (error) {
        res.status(500).json({succeded:false, error});
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
             // Şifre eşleşiyorsa giriş yapıyoruz.
            res.status(200).send("you loggeend in")
        }
        else{
            // Şifre eşleşmiyorsa hata döndürüyoruz.
            res.status(401).json({succeded:false, error:"Wrong password"});
        }
    } catch (error) {
        res.status(500).json({succeded:false, error});
    }
};

export {createUser,loginUser};