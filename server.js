var http = require('http');
var fs = require('fs');
var path = require('path');
const hostname = 'hirammtz.fullstack.com.mx'
const port = 3000

const server= http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }
var extname = String(path.extname(filePath)).toLowerCase();
var contentType = 'text/html';
var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
};
contentType = mimeTypes[extname] || 'application/octet-stream';
fs.readFile(filePath, function (error, content) {
    if (error) {
        if (error.code == 'ENOENT') {
            fs.readFile('./404-templates-main/404.html', function (error, content) {
                response.writeHead(200, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            });
        }
        else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin error: ' + error.code + '..\n');
            response.end();
        }
    }
    else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
    }
});
    });
    server.listen(port, hostname, () => {
        console.log('El Servidor se está Ejecutando en http://${192.168.1.248}:${3000}/');
        });