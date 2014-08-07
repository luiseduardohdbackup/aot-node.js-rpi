
var aotrpi = require('../aot-rpi');
var gpio = require("pi-gpio");
var DEVICE_ID = "D33373850674";
var DEVICE_KEY = "5132766e835047ed";
var NODE_ID = "1";
var gpioPin = 18;


var client = aotrpi.getPubClient(DEVICE_ID,DEVICE_KEY);

setInterval(function() {	
	var input_value = aotrpi.gpioRead(gpioPin);
	var content = {
    		"message_type" : "node.content",
    		"device_id" : DEVICE_ID,
    		"device_key" : DEVICE_KEY,
    		"node_id" : NODE_ID,
    		"content_value" : input_value+""
	};
	console.log(JSON.stringify(content));
    client.publish('/'+DEVICE_ID+'/publish', JSON.stringify(content));	
	console.log("success !!");
}, 5*1000);



