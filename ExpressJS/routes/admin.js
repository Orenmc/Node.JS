const express = require('express');

const router = express.Router();


// /admin/add-product =>get
router.get('/add-product', (req, res, next) => {
    console.log('test - add product');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
}); // next - is a function!, must be excuted

// /admin/add-product =>get
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;