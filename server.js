const http = require('http');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((request, resolve) => {
  resolve.statusCode = 200;
  resolve.setHeader('Content-Type', 'text/plain');
  resolve.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})