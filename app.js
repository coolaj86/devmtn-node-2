module.exports.create = function () {
  var express = require('express');
  var app = express();
  var staticServer = express.static(__dirname + '/public');
  var bodyParser = require('body-parser');


  function handler(req, res) {
    console.log(req.body);
    res.setHeader('X-Foo-Header', 'value');

    res.send(req.body);
  }

  function logger(req, res, next) {
    console.log(req.method, req.url);
    req.logged = true;
    next();
  }

  function getMessage(req, res) {
    var name = req.params.name || 'friend';
    res.send({ message: "hello " + name });
  }

  app.use('/', logger);
  app.use('/', staticServer);
  app.use('/api', bodyParser.json()); // good 
  // badyParser.urlencoded() // CSRF

  app.get('/api/messages/:name', getMessage);
  app.post('/api/messages', handler);
  app.delete('/api/messages', handler);

  //app.post('/api/messages', handler);
  return app;
};