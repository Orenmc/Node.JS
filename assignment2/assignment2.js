const http = require('http');
const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) =>
{
    res.status(204);
});


app.use('/users', (req, res, next) => {
    console.log('users');
    res.send('<h1>Users</h1>')
});

app.use('/',(req, res, next) => {
    console.log('backslesh');
    res.send('<h1>backSlesh</h1>');
});




console.log('listening...');
app.listen(3000);