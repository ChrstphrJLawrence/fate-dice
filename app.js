var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//TODO Production React Serving

var PORT = 8080;

var users = new Array();

http.listen(PORT, () => {
  console.log('listening on *:8080');
})

io.on('connection', (socket) => {
  console.log('connection!');
  users.push(socket.id);
  console.log(users);
  socket.broadcast.emit('usersUpdate', {users: users});

  socket.on('disconnect', function() {
    console.log('disconnected!');
    var i = users.indexOf(socket.id);
    users.splice(i, 1);
    console.log(users);
    socket.broadcast.emit('usersUpdate', {users: users});
  })

  socket.on('roll', (value) => {
    console.log('roll: ' + value);
  });
});