const fs = require('fs');

const routeHandler= (req,res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(`<html><head><title>Mesaj Gir</title></head><body>
          <form method="POST" action="/log">
            <input type="text" name="message">
            <button type="submit">Kaydet</button>
          </form>
        </body></html>`);
        return res.end();
      }
      if (url === '/log'&&method === 'POST') {

        fs.appendFileSync('message.txt','deneme');
        res.statusCode = 302;
        res.setHeader('location','/');
        return res.end();
      }
}

module.exports = routeHandler;