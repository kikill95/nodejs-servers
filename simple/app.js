// Load the http module to create an http server.
var http = require('http')
var url = require('url')

var port = 8000
var ip = '127.0.0.1'

// Configure our HTTP server to respond to all requests.
var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  response.writeHead(200, {'Content-Type': 'text/plain'})
  if (parsedUrl.pathname === '/bye') {
    response.end('Bye World')
  } else {
    response.end('Hello World')
  }
})

server.listen(port, ip)

// Put a friendly message on the terminal
console.log('Server running at ' + ip + ':' + port)
