var express = require('express');

var router     = express.Router();
var controller = require('../controllers/get');

router.get ('/user_info/user_id/:user_id', controller.user_info_by_id);
router.get ('/user_info/email_id/:email_id', controller.user_info_by_email);

module.exports = router;
