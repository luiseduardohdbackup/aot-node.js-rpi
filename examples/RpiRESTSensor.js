
var aotrpi = require('../lib/aot-rpi');
//var gpio = require("pi-gpio");
var gpio = require('rpi-gpio');
var AUTHORIZATION = "Basic RDI0MTQ3NDgwMjQ5OjBjNmVhNjk1ZmZjZDQwOGQ=";
var DEVICE_ID = "D24147480249";
var NODE_ID = "1";
var gpioPin = 7;

/*
setInterval(function() {
	
	gpio.read(gpioPin, function(err, value) {
	    if(err) throw err;
		var content =[{
    		"content_value" : value+""
		}];
		console.log(JSON.stringify(content));
		aotrpi.post(AUTHORIZATION,DEVICE_ID,NODE_ID,JSON.stringify(content));
	});	
	
}, 5*1000);
*/

gpio.setup(7, gpio.DIR_IN, readInput);

function readInput() {
    gpio.read(7, function(err, value) {
        console.log('The value is ' + value);
    });
}

readInput(); 
