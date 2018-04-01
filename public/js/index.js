var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    text: 'Creating a new email',
    to: 'jen@example.com'
  });
});

socket.on('disconnect', function () {
  console.log('Server disconnected.');
});

socket.on('newMessage', function (message) {
  console.log('NEW MESSAGE from server:', message);
});
