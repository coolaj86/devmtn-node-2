'use strict';

var http = require('http');
var server = http.createServer();
var port = 8282;
var app = require('./app').create();

// EventEmitter • Promise • Thunk
// (a thunk is callback with err as first param)

server.on('request', app);

server.listen(port, function () {
  console.log("Now I'm ready", server.address());
});