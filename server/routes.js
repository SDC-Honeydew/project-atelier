var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);



module.exports = router;