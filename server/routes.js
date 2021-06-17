var controllers = require('./controllers');
var router = require('express').Router();

router.get('/overview', controllers.products.getRelevantInfo);

router.get('/related', controllers.related.getRelatedProducts);

router.get('/review', controllers.review.getReviewsForOneProduct);


module.exports = router;