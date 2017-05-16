var express       = require('express');
var body_parser    = require('body-parser');

var config    = require ('./config');
var mongo     = require ('./common/mongodb');
var get       = require ('./routes/get');
var remove    = require ('./routes/remove');
var add       = require ('./routes/add');
var update    = require ('./routes/update');

var app = express ();

mongo.connect ();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use ('/get', get);
app.use ('/remove', remove);
app.use ('/add', add);
app.use ('/update', update);

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port + '!');
});
