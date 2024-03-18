const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/',(req, res, next) =>{ console.log("Middleware1 çalıştırıldı1");
    res.sendFile(path.join(__dirname,'../','view','index.html'));}
);
module.exports = router;