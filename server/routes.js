var controller = require('./controllers');
var router = require('express').Router();

router.get('/product', controller.products.getOnePage);



module.exports = router;