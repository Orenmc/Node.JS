const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();


// /admin/add-product =>get
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); // next - is a function!, must be excuted

// /admin/add-product =>get
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;