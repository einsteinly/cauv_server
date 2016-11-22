var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

io.on('connection', function (socket) {
  socket.emit('connection', { name: 'cauv' });
  socket.on('move', function (data) {
    console.log(data);
  });
});