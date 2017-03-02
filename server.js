var http = require('http');

var hostname = '127.0.0.1';
var port = 8082;


function start(){
var server = http.createServer((request, resolve) => {
  resolve.statusCode = 200;
  resolve.setHeader('Content-Type', 'text/plain');
  resolve.end('Hello World\n');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
}
exports.start=start;