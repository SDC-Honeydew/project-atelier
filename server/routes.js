var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOneProduct);
router.get('/product-styles', controllers.products.getStyles);
router.get('/product-info', controllers.products.getProductInfo);
router.get('/r-data', controllers.products.getRelevantInfo);

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