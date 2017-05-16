var model = require("../models/remove");

var controller = {};

controller.user_by_id = function (req, res, next) {
	var user_id = req.params.user_id;
	
	model.user_by_id (user_id, function (err, result) {
		if (err)
			res.send (err);

		res.send (result);
	});
};

module.exports = controller;
