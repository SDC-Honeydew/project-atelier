var controllers = require('./controllers');
var router = require('express').Router();

router.get('/product', controllers.products.getOnePage);

router.get('/reviews', controllers.review.getReviewsForOneProduct);

router.post('/reviews', controllers.review.addReview);

module.exports = router;