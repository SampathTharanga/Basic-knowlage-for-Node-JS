// To include the File System module, use the "require()" method:
//              var fs = require('fs');
// Common use for the File System module:
//      Read files
//      Create files
//      Update files
//      Delete files
//      Rename files


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

// The "fs.readFile()" method is used to read files on your computer.