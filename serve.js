'use strict';

var http = require('http');
var server = http.createServer();
var port = 8282;

// EventEmitter • Promise • Thunk
// (a thunk is callback with err as first param)

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

server.on('request', handler);

server.listen(port, function () {
  console.log("Now I'm ready", server.address());
});
