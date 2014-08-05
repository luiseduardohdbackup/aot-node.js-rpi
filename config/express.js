
var express    = require('express'); 		
var bodyParser = require('body-parser');
var logger = require('morgan');


module.exports = function (app, config, passport) {
  
  app.use(logger());
  //app.use(bodyParser());

  app.all('*', function(req, res, next) {
  	res.header('Content-Type', 'application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
    next();
  });

}