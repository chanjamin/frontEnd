var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(req, resp) {
        try {
            var pathname = url.parse(req.url).pathname;
            console.log("Request for " + pathname + " received.");

            route(pathname)
            resp.writeHead(200, {'Content-Type': "text/plain"})
            resp.end("Hello world")
        } catch (e) {
            resp.writeHead(500, {'Content-Type': "text/plain"})
            resp.end("Hello Error")
        }
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.");
}
exports.start=start;