const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{



    fs.readFile('index.html', function(error, file) {
        if (error) {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 404;
          res.statusMessage = 'Not Found';
          res.end("dosya bulunamadı");
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.statusMessage = 'Ok';
          res.end(file);
        }
      });});
      

// server.listen(3000);
// console.log('Listening port on 3000');