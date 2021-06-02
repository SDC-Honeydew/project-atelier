const express = require('express');
const app = express();
const port = 3000;
const getProducts = require('./getProducts.js').getProducts

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/test', (req, res) => {
  getProducts(res => {
    console.log(res)
  })

})

app.listen(port, () => console.log(`Listening at port ${port}`))