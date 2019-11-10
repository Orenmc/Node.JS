const http = require('http');
const express = require('express');

const app = express();



app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>"add producuct</h1>');
}); // next - is a function!, must be excuted


app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!1</h1><h2>tring to do something else</h2>');
}); // next - is a function!, must be excuted


console.log('listen');
app.listen(3000);

