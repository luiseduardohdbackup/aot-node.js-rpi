
var aotrpi = require('../aot-rpi');
var request = require('request');
var AUTHORIZATION = "Basic RDcwMTI3MTc2NjEwOm51bGw=";
var DEVICE_ID = "D70127176610";
var NODE_ID = "1";
var gpioPin = 18;

setInterval(function() {
	
	var input_value = aotrpi.gpioRead(gpioPin);
	var content =[{
    	"content_value" : input_value
	}];
	aotrpi.post(SERVER_IP,DEVICE_ID,NODE_ID,content);

}, 5*1000);






