const express = require('express');
const bodyParser = require('body-parser');

/*
app.get('/favicon.ico', (req, res) => {
    res.status(204);
}); //good for  dealing with entering twice (reload twice) the page
*/

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));   //parsing the request (ends from form!)

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// should be last- default catch
app.use((req,res,next) =>{
    res.status(404).send('<h1>page not found</h1>');
});


//open server and listen on port 3000
console.log('listening...');
app.listen(3000);

