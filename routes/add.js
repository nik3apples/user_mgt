var express = require('express');

var router     = express.Router();
var controller = require('../controllers/add');

router.post ('/new_user', controller.new_user);

module.exports = router;
