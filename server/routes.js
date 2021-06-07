var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);

router.get('/related', controllers.related.getRelatedProducts);


module.exports = router;