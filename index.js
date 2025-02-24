// index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('User connected: ' + socket.id);
  
  socket.on('chat message', (msg) => {
    console.log('Received message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

// Bind to all interfaces
server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://172.22.240.1:3000');
});
