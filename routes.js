const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Messege</title></head>');
        res.write('<body><form action ="/messege" method="POST"><input type="text" name= "msg" ><button type="submit">Send</button></form></body>');
        res.write('</head>');
        return res.end();
    }
    if (url === "/messege" && method === 'POST') {
        const body = [];
        req.on('data', (chunke) => {
            console.log(chunke);
            body.push(chunke);
        });

        // when return - this ends the loop , although the "event hendler" will stiil use the callback
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const msg = parseBody.split('=')[1];
            // save msg in file
            fs.writeFile('messege.txt', msg, err => {
                //redirericting:
                res.statusCode = 302;
                // set url as : '/' (route to)
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>hello from my Node.js Server</body>');
    res.write('</head>');
    res.end();
};


exports.sometext2 = 'bla bla';
exports.handler = requestHandler;