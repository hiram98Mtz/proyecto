const http = require('http')
const hostname = 'hirammtz.fullstack.com.mx'
const port = 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hola Mundo</h1>');
});
server.listen(port, hostname, () => {
console.log('El Servidor se está Ejecutando en http://${192.168.1.248}:${3000}/');
});