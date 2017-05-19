var model  = require("../models/add");
var cfunc  = require("../common/common_functions");

var controller = {};

controller.new_user = function (req, res, next) {
	var data = req.body;
	var pass = data.password;

	// User_id null check
	if (!data.user_id)
		return res.send ('Error : User Id missing.');

	cfunc.encrypt_password (pass, function (err, result) {
		if (err)
			return res.send ('Password Encryption error : ' + err);

		var user_info = {
			user_id        : data.user_id,
			password_info  : result,
			first_name     : data.first_name,
			last_name      : data.last_name,
			email_id       : data.email_id,
			contact_number : data.contact_number
		};

		model.new_user (user_info, function (err, result) {
			if (err)
				return res.send (err);

			return res.send (result);
		});
	});
};

module.exports = controller;
