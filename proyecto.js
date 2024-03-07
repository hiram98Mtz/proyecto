const http = require('http')
const hostname = '192.168.226.229'
const port = 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hola Mundo\n');
});
server.listen(port, hostname, () => {
console.log('El Servidor se está Ejecutando en http: //${hostname}:${port}/');
});