const http = require('http');

http.createServer(function (request, response) {
    console.log('server work');
}).listen(5500, '127.0.0.1');