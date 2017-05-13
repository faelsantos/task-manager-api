
const db = require('mongoose');
const dbURL = 'mongodb://127.0.0.1/task-manager';

db.connect(dbURL);
db.Promise = global.Promise;

db.connection.on('connected', function () {
  console.log('DB - Conexão padrão estabelecida com:', dbURL);
});

db.connection.on('open', function () {
  console.log('DB - Conexão está aberta!');
});

db.connection.on('disconnected', function () {
  console.log('DB - Conexão padrão foi desconectada!');
});

db.connection.on('error',function (err) {
  console.log('DB - Error de conexão:', err.message);
});

process.on('SIGINT', function() {
  db.connection.close(function () {
    console.log('DB - Conexão padrão foi desconectada devido encerramento da app!');
    process.exit(0);
  });
});