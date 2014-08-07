var counter = 0

var http = require('http');

var handlevisitor = function (request, response) {
	console.log(request.url);
	if(request.url == "/") {
		response.writeHead(200, {'Content-Type': 'text/html'});
	    response.end('<HTML> <b>Hello visitor</b> number:'+counter+'</HTML>');	
	}

	if(request.url == "/about") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
	    response.end('Hi this is about page');		
	}
	counter = counter + 1
	
}

var myserver = http.createServer(handlevisitor)

myserver.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');