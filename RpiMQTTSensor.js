var gpio = require("pi-gpio");
var mqtt = require('mqtt');

var SERVER_IP = "218.239.45.45";
var PORT = 1883;

var DEVICE_ID = "D33373850674";
var DEVICE_KEY = "5132766e835047ed";
var NODE_ID = "1";
var gpioPin = 18;

var client = mqtt.createClient(PORT, SERVER_IP, {
	username: DEVICE_ID,
	password: DEVICE_KEY 
});

function publish(){

	gpio.read(gpioPin, function(err, value) {
	    if(err) throw err;
	    var content = {
    		"message_type" : "node.content",
    		"device_id" : DEVICE_ID,
    		"device_key" : DEVICE_KEY,
    		"node_id" : NODE_ID,
    		"content_value" : value+""
		};
		console.log(JSON.stringify(content));
        client.publish('/'+DEVICE_ID+'/publish', JSON.stringify(content));	
	});
	
}

setInterval(function() {	
	publish();
	console.log("success !!");

}, 5*1000);


mqtt_client.options.reconnectPeriod = 5;
