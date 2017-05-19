var express = require('express');

var router     = express.Router();
var controller = require('../controllers/remove');

router.get ('/user/user_id/:user_id', controller.user_by_id);

module.exports = router;
