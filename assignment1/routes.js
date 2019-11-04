
const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<title>Hello</title>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user-name"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.write('<html>');
        res.write('<title>users</title>');
        res.write('<body>');
        res.write('<ul><li>User1</li>');
        res.write('<li>User2</li>');
        res.write('<li>User3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url == '/create-user' && method == 'POST'){ //forgot / befor create-user!
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const userName = Buffer.concat(body).toString().split('=')[1];
            console.log(userName);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

exports.handler = reqHandler;