var http = require("http");
var dt = require("./myfirstmodule");
var date = dt.myDateTime();

http.createServer(function(req, res){
    res.writeHead(200,undefined,{"Content-Type": "text-html"})
    res.write("The date and time are currently: " + date);
    res.end();
}).listen(8080);