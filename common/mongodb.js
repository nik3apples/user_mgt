var mongo       = require('mongodb');
var assert      = require('assert');
var config      = require('../config');

var url      = config.mongo_url;
var mongodb  = {};
var db       = null;

mongodb.connect = function () {
	mongo.MongoClient.connect(url, function(err, _db) {
		assert.equal(null, err);
		db = _db;
		console.log("Connected correctly to server");
	});
};

mongodb.collection = function (collection) {
	if (!db)
		return null;

	return db.collection (collection);
};

mongodb.close_connection = function () {
	db.close ();
};

mongodb.convert = function (id) {
	return mongo.ObjectID (id);
};

module.exports = mongodb;
