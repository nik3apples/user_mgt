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
			res.send (err);

		res.send (result);
	});
};

module.exports = controller;
