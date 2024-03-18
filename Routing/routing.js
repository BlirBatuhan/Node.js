const http = require('http');
const routes = require('./kısayol');
const server = http.createServer(routes);

server.listen(3000);
console.log('listening on port 3000');