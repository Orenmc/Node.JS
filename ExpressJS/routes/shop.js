const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir ,'views', 'shop.html'));
}); // next - is a function!, must be excuted

module.exports = router;