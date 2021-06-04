const express = require('express');
const app = express();
const port = 3000;
const getProducts = require('./getProducts.js').getProducts;
//const router = require('./routes.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.get('/products', () => console.log('werks'));

app.get('/test', (req, res) => {
  res.send('hey');
});

app.listen(port, () => console.log(`Listening at port ${port}`));