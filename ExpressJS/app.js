const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

app.use(bodyParser.urlencoded({extended: true}));   //parsing the request (ends from form!)


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
}); // next - is a function!, must be excuted

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!1</h1><h2>tring to do something else</h2>');
}); // next - is a function!, must be excuted


console.log('listen');
app.listen(3000);

