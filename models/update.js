var mongo_functions = require ('./mongodb');
var mongo = require ('../common/mongodb');

var model = {};

model.update_email = function (user_info, controller_cb) {
	var find = {
		user_id : user_info.user_id
	};
	var set = {
		email_id : user_info.email_id
	};

	mongo_functions.update_document ('user_data', find, set, function (err, res) {
		if (err)
			return controller_cb (err, null);

		return controller_cb (null, res);
	});
};

module.exports = model;
