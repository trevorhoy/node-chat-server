const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    text: 'hey can you guys meetup',
    from: 'mike@example.com',
    createdAt: 123
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected.');
  });

  socket.on('createMessage', (message) => {
    console.log('Create message from client', message);
  });
});


server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = { app };