var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})

http.listen(3000, function () {
  console.log('Listening on localhost:3000')
})
