var http = require('http');
var port = process.env.PORT||1337;

http.createServer(function(req,res){ 
    res.setHeader('Content-Type','text/plain');
    res.end("helloWorld");
}).listen(port);