const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('test - home page');
    res.send('<h1>Hello from Express!1</h1>');
}); // next - is a function!, must be excuted

module.exports = router;