var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This portal has been closed, you shall not pass!!');
    
}).listen(process.env.PORT || 8080);