var pbkdf2       = require('pbkdf2');
var randomstring = require("randomstring");
var config       = require('../config');
var $            = require('jquery-deferred');

var cfunc = {};

cfunc.encrypt_password = function (clear_text) {
	var d = $.Deferred ();

	var option_set = {
		salt : randomstring.generate({
			length  : config.salt_length,
			charset : config.salt_charset
		}),
		rounds : Math.floor((Math.random() * 9) + 1),
		length : config.hash_length,
		hash   : config.hash_digest
	};

	pbkdf2.pbkdf2(clear_text, option_set.salt, option_set.rounds, option_set.length, option_set.hash, function (err, encrypted_key) {
		if (err)
			d.reject (err);

		var data = {
			password      : encrypted_key.toString('hex'),
			salt          : option_set.salt,
			rounds        : option_set.rounds,
			salt_length   : config.salt_length,
			salt_charset  : config.salt_charset,
			hash_length   : config.hash_length,
			hash_digest   : config.hash_digest
		};

		d.resolve (data);
	});

	return d.promise ();
};

module.exports = cfunc;
