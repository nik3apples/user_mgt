var mongo_functions = require ('./mongodb');

var model = {};

model.user_info_by_id = function (user_id, controller_cb) {
	mongo_functions.find_documents ('user_data', 'user_id', user_id, function (err, res) {
		if (err)
			return controller_cb (err, null);

		var data = {
			user_id         : res[0].user_id,
			first_name      : res[0].first_name,
			last_name       : res[0].last_name,
			email_id        : res[0].email_id,
			contact_number  : res[0].contact_number
		};
		return controller_cb (null, data);
	});
};

model.user_info_by_email = function (email_id, controller_cb) {
	mongo_functions.find_documents ('user_data', 'email_id', email_id, function (err, res) {
		if (err)
			return controller_cb (err, null);

		var data = [];
		var res_length = res.length;

		for (var i = 0; i < res_length; i++) {
			data.push ({
				user_id         : res[i].user_id,
				first_name      : res[i].first_name,
				last_name       : res[i].last_name,
				email_id        : res[i].email_id,
				contact_number  : res[i].contact_number
			});
		}
		
		return controller_cb (null, data);
	});
};

module.exports = model;
