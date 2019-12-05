const express = require('express');
const expressLoad = require('express-load');
const bodyParser = require('body-parser');


module.exports = function () {

  let app = express();
  const port = normalizePort(process.env.port || 3333);

  //variaveis de ambiente

  app.set('port', port);


  //

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  return app;

};


// Normalize a port into a number, string, or false.

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}