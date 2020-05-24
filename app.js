var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//TODO Production React Serving

var PORT = 8080;

http.listen(PORT, () => {
  console.log('listening on *:8080');
})

io.on('connection', (socket) => {
  console.log('connection!');

  socket.on('disconnect', function() {
    console.log('disconnected!');
  })
})