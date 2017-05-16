var bunyan   = require('bunyan');

var log = {};

log = bunyan.createLogger ({
	name : 'user_management',
	streams : [
		{
			name : "stdout",
			stream : process.stdout,
			level  : 'debug'
		},
	]
});

module.exports = log;
