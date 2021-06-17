var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);

router.get('/reviews', controllers.review.getReviewsForOneProduct);

router.post('/reviews', controllers.review.addReview);

router.put('/reviews/helpful', controllers.review.markReviewHelpful);

router.put('/reviews/report', controllers.review.reportReview);

module.exports = router;