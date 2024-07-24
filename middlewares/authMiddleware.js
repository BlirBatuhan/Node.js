import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const authenticateToken = async (req, res, next) => {
    try {
        // Çerezi al
        const token = req.cookies.jwt;

        if (token) {
            // Token'ı doğrula
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    console.log(err.message);
                    return res.redirect('/login'); // Doğrulama hatasında yönlendirme
                }
                
                // Token geçerli ise kullanıcı bilgilerini isteğe ekle ve devam et
                req.user = user;
                next();
            });
        } else {
            // Token bulunamazsa, giriş sayfasına yönlendir
            res.redirect('/login');
        }
    } catch (error) {
        // Beklenmeyen hataları yönet
        console.error(error.message);
        res.status(401).json({
            succeeded: false,
            error: "Yetkisiz"
        });
    }
};

export { authenticateToken };

