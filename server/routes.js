var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);

router.get('/review', controllers.review.getReviewsForOneProduct);


module.exports = router;