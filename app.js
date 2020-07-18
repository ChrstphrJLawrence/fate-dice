var express = require('express');
const { ALPN_ENABLED } = require('constants');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//TODO Production React Serving

var PORT = 8080;

var users = new Map();

http.listen(PORT, () => {
  console.log('listening on *:8080');
})

io.on('connection', (socket) => {
  socket.join('defaultRoom');
  console.log('connection!');
  users.set(socket.id, {id: socket.id, name: socket.id});
  console.log(users);
  io.in('defaultRoom').emit('usersUpdate', {users: Array.from(users)});

  socket.on('disconnect', function() {
    console.log('disconnected!');
    users.delete(socket.id);
    io.in('defaultRoom').emit('usersUpdate', {users: Array.from(users)});
  })

  socket.on('nameChange', (name) => {
    users.set(socket.id, {id: socket.id, name: name})
    io.in('defaultRoom').emit('usersUpdate', {users: Array.from(users)});
  })

  socket.on('roll', () => {
    var user = users.get(socket.id);
    var dice = [rollDice(), rollDice(), rollDice(), rollDice()];
    var total = dice.reduce((a, b) => a + b);
    var result = { name: user.name, total: total, dice: dice };
    console.log(result);
    io.in('defaultRoom').emit('roll', result);
  });

  function rollDice() {
    return -1 + Math.floor(Math.random() * (3));
  }
});