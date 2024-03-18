const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/api-product',(req, res, next) =>{ console.log("Middleware2 çalıştırıldı2");
    res.sendFile(path.join(__dirname,'../','view','add-product.html'));
});

router.post('/api-product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;