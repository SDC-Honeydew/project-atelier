var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.returnOneProduct);



module.exports = router;