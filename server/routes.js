var controllers = require('./controllers');
var router = require('express').Router();

router.get('/overview', controllers.products.getRelevantInfo);

router.get('/cart', controllers.cart.getCart);

router.post('/cart', controllers.cart.addItemToCart);

///// ROUTERS FOR RELATED PRODUCT WIDGET
router.get('/related', controllers.related.getRelatedProducts);
router.get('/related/features', controllers.related.getFeatures);
router.get('/related/outfit', controllers.related.getOutfit);
router.post('/related/outfit', controllers.related.addToOutfit);
router.put('/related/outfit', controllers.related.removeFromOutfit);
/////

router.get('/reviews', controllers.review.getReviewsForOneProduct);

router.post('/reviews', controllers.review.addReview);

router.put('/reviews/helpful', controllers.review.markReviewHelpful);

router.put('/reviews/report', controllers.review.reportReview);



module.exports = router;