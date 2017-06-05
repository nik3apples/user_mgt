var model     = require("../models/update");
var cfunc     = require("../common/common_functions");
var model_get = require("../models/get");
var $         = require('jquery-deferred');

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
	var data     = req.body;
	var user_id  = data.user_id;
	var old_pass = data.old_password;
	var user_info = {
		user_id       : user_id,
		new_password  : data.new_password	
	};

	// User_id null check
	if (!user_id)
		return res.send ('Error : User Id missing.');

	cfunc.encrypt_password (pass)
		.then( get_match_user_info.bind (null, user_id), (err) => { return res.send ('Encryption err: ' + err); })
		.then( 
			model.update_password (user_info, function (err, result) {
				if (err)
					return res.send (err);

				return res.send (result);
			}),
			(err) => { return res.send (err); });
};

function get_match_user_info (user_id, encrypted_password) {
	var d = $.Deferred ();
	
	model_get.user_info_by_id (user_id, function (err, result) {
		if (err)
			d.reject ('Error getting user info. Err: ' + err);

		var encrypted_password_db = result.password_info.password;
		
		if (encrypted_password_db != encrypt_password)
			d.reject ('Old Password not correct.');

		d.resolve (data);
	});

	return d.promise ();
}

module.exports = controller;
