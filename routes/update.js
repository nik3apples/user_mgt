var express = require('express');

var router     = express.Router();
var controller = require('../controllers/update');

router.post ('/email', controller.update_email);
router.post ('/password', controller.update_password);

module.exports = router;
