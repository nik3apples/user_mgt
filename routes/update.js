var express = require('express');

var router     = express.Router();
var controller = require('../controllers/update');

router.post ('/email', controller.update_email);

module.exports = router;
