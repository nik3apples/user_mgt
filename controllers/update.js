var model = require("../models/update");

var controller = {};

controller.update_email = function (req, res, next) {
	var data = req.body;
	var user_info = {
		user_id    : data.user_id,
		email_id   : data.email_id
	};

	model.update_email (user_info, function (err, result) {
		if (err)
			return res.send (err);

		return res.send (result);
	});
};

controller.update_password = function (req, res, next) {
	var data = req.body;
	var user_info = {
		user_id       : data.user_id,
		old_password  : data.old_password,
		new_password  : data.new_password	
	};

	model.update_email (user_info, function (err, result) {
		if (err)
			return res.send (err);

		return res.send (result);
	});
};

module.exports = controller;
