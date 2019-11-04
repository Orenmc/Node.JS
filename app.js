//also test fot git, test??

const http = require('http');
const routes = require('./routes');

// arrow function
const server = http.createServer(routes.handler);
// loop: keep running and listen 

console.log('server is ON');
server.listen(3000); // port - 3000