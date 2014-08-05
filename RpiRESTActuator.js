var express = require('express');
var app = express();
var fs = require('fs');
var mqtt = require('mqtt');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

require('./config/express')(app, config);
//require('./config/mongodb')(app, config);

var router = express.Router();    
require('./config/routes')(app, router);

var port = 13000;
app.listen(port);
console.log('Express app started on port : ' + port);