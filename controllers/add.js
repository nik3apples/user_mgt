var model = require("../models/add");

var controller = {};

controller.new_user = function (req, res, next) {
	var data = req.body;
	var user_info = {
		first_name     : data.first_name,
		last_name      : data.last_name,
		email_id       : data.email_id,
		contact_number : data.contact_number
	};

	model.new_user (user_info, function (err, result) {
		if (err)
			res.send (err);

		res.send (result);
	});
};

module.exports = controller;
