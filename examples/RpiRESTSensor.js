
var aotrpi = require('../lib/aot-rpi');
var request = require('request');
var AUTHORIZATION = "Basic RDI0MTQ3NDgwMjQ5OjBjNmVhNjk1ZmZjZDQwOGQ=";
var DEVICE_ID = "D24147480249";
var NODE_ID = "1";
var gpioPin = 18;

setInterval(function() {
	
	var input_value = aotrpi.gpioRead(gpioPin);
	var content =[{
    	"content_value" : input_value
	}];
	aotrpi.post(AUTHORIZATION,DEVICE_ID,NODE_ID,content);

}, 5*1000);






