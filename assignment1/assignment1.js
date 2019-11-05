const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);

console.log('assignment1');
server.listen(3000);