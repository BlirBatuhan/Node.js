
const Logger = require('./logger');

const log = new Logger();

log.on('connection', function(args) {
  console.log('Bağlantı Kuruldu:', args);
});

log.log('Batuhan Bilir login oldu');
 