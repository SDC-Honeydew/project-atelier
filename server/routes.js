var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOneProduct);
router.get('/product-styles', controllers.products.getStyles);
router.get('/product-info', controllers.products.getProductInfo);
router.get('/r-data', controllers.products.getRelevantInfo);

router.get('/review', controllers.review.getReviewsForOneProduct);


module.exports = router;