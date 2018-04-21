var http = require('http');
const port = 9000;

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

}).listen(port, '127.0.0.1');