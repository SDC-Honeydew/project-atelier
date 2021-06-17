var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOneProduct);
router.get('/product-styles', controllers.products.getStyles);
router.get('/product-info', controllers.products.getProductInfo);
router.get('/r-data', controllers.products.getRelevantInfo);

router.get('/reviews', controllers.review.getReviewsForOneProduct);

router.post('/reviews', controllers.review.addReview);

router.put('/reviews/helpful', controllers.review.markReviewHelpful);

router.put('/reviews/report', controllers.review.reportReview);

module.exports = router;