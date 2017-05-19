var mongo = require ('../common/mongodb');

var mongodb = {};

mongodb.find_documents = function (_collection, param, data, callback) {
	// Get the documents collection
	var collection = mongo.collection (_collection);

	// Creating query
	var _find = {};

	// Converting user_id to mongodb ObjectId
	if (param === '_id')
		_find[param] = mongo.convert (data);
	else
		_find[param] = data;

	// Find some documents
	collection.find(_find).toArray(function(err, res) {
		if (err)
			return callback ('Error fetching data from db. Err: ' + err, null);

		if  (res.length === 0)
			return callback (null, 'No user data');

		return callback (null, res);
	});
};

mongodb.insert_document = function (_collection, data, callback) {
	// Get the documents collection
	var collection = mongo.collection (_collection);
	collection.createIndex ({ user_id : 1 }, { unique : true });
	//var collection = mongo.collection (_collection).createIndex({ "user_id": 1 }, { unique: true });

	// Insert document
	collection.insertOne(data, function(err, res) {
		if (err)
			return callback ('Error inserting data. Err: ' + err, null);

		return callback (null, 'Document inserted successfully.');
	});
};

mongodb.update_document = function (_collection, find, set, callback) {
	// Get the documents collection
	var collection = mongo.collection (_collection);

	// Update document
	collection.updateOne(find, { $set: set }, function(err, res) {
		if (err)
			return callback ('Error updating data. Err: ' + err, null);

		return callback (null, 'Document updated successfully.');
	});
};

mongodb.delete_document = function(_collection, param, data, callback) {
	// Get the documents collection
	var collection = mongo.collection (_collection);

	// Creating query
	var _find = {};

	// Converting user_id to mongodb ObjectId
	if (param === '_id')
		_find[param] = mongo.convert (data);
	else
		_find[param] = data;

	// Delete document
	collection.deleteOne(_find, function(err, result) {
		if (err)
			return callback ('Error deleting document from db. Err: ' + err, null);

		return callback (null, 'Document deleted successfully.');
	});
};

module.exports = mongodb;
