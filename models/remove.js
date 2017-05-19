var mongo_functions = require ('./mongodb');

var model = {};

model.user_by_id = function (user_id, controller_cb) {
	mongo_functions.delete_document ('user_data', 'user_id', user_id, function (err, res) {
		if (err)
			return controller_cb (err, null);

		return controller_cb (null, res);
	});
};

module.exports = model;
