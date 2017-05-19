var model = require('../models/get');
var log   = require('../common/log');

var controller = {};

controller.user_info_by_id = function (req, res, next) {
	var user_id = req.params.user_id;
	
	model.user_info_by_id (user_id, function (err, result) {
		if (err)
			return res.send (err);

		log.info ('User info: ' + result);
		return res.send ('User Info: ' + JSON.stringify(result));
	});
};

controller.user_info_by_email = function (req, res, next) {
    var email_id = req.params.email_id;

	model.user_info_by_email (email_id, function (err, result) {
		if (err)
			return res.send (err);

		return res.send ('User Info: ' + JSON.stringify(result));
	});
};

module.exports = controller;
