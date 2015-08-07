module.exports.create = function () {
  var express = require('express');
  var app = express();
  var staticServer = express.static(__dirname + '/public');


  function handler(req, res) {
    var result = '';
    req.on('data', function (buffer) {
      console.log(buffer);
      console.log(buffer.toString('utf8'));
      result += buffer.toString('utf8');
    });
    req.on('end', function () {
      console.log('done', result);
      res.statusCode = 200;
      res.write(JSON.stringify({ success: true }));
      res.end();
    });
  }

  app.use('/', staticServer);

  app.get('/api/messages', handler);
  app.post('/api/messages', handler);
  app.delete('/api/messages', handler);

  //app.post('/api/messages', handler);
  return app;
};