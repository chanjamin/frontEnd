let querystring = require('querystring');
let http = require('http');
let server = http.createServer();
server.on('request', function(req, res) {
    var params = querystring.parse(req.url.split('?')[1]);
    var fn = params.callback;

    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(params) + ')');//onback({"username":"adnmin","callback":"onback"})

    res.end();
});

server.listen('8080');