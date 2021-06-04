var controller = require('./controllers');
var router = require('express').Router();

router.get('/test', controller.products.getOnePage);

// router.post('/messages', controller.messages.post);

// router.get('/users', controller.users.get);

// router.post('/users', controller.users.post);

module.exports = router;