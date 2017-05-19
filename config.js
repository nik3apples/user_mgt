var config 		= {};

// Node Server
config.port = '3000';
config.host = 'localhost';

// Mongo
config.mongo_url = 'mongodb://localhost:27017/user_test';

// Password Hash
config.salt_length  = 32;
config.salt_charset = 'alphanumeric';
config.hash_length  = 64;
config.hash_digest  = 'sha512';

module.exports = config;
