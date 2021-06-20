var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);

router.get('/related', controllers.related.getRelatedProducts);

router.get('/related_features', controllers.related.getFeatures);

router.get('/review', controllers.review.getReviewsForOneProduct);




module.exports = router;