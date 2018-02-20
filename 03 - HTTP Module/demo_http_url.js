var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/html'});;
    res.write(req.url);
    res.end();
}).listen(8080);
// The function passed into the http.createServer() has a req argument that represents the request from the client, 
// as an object (http.IncomingMessage object).

// http://localhost:8080/summer
// OUTPUT: 
//         /summer