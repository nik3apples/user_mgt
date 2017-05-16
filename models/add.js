var mongo_functions = require ('./mongodb');

var model = {};

model.new_user = function (user_info, controller_cb) {
	mongo_functions.insert_document ('user_data', user_info, function (err, res) {
		if (err)
			return controller_cb (err, null);

		return controller_cb (null, res);
	});
};

module.exports = model;
