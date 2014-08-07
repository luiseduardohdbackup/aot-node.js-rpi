var request = require('request');
var gpio = require("pi-gpio");
var mqtt = require('mqtt');
var pub_client;
var sub_client;

var SERVER_IP = "218.239.45.45";
var PUB_PORT = 1883;
var SUB_PORT = 1887;

module.exports.post = function (SERVER_IP,DEVICE_ID,NODE_ID,content) {

	var options = {
	    url: "http://"+SERVER_IP+"/devices/"+DEVICE_ID+"/nodes/"+NODE_ID+"/contnts",
	    headers: {
	        'Content-Type': 'application/json;charset=UTF-8',
	        'Authorization': AUTHORIZATION
	    }
	};	

	request.post(options, function optionalCallback (err, httpResponse, body){
	    if (err) {
			console.error(err);
		}
	    console.log("success !!");

	}).json(content);
};	

module.exports.gpioRead = function (gpioPin) {	
    var content = "";
	gpio.read(SENSOR_INPUT_PIN, function(err, value) {
	    if(err) throw err;
	    var content =[{
    		"content_value" : value
		}];
		console.log(content); 
        return content;
	});
};

module.exports.gpioWrite = function (gpioPin,input_value) {	

    gpio.open(gpioPin, "output", function(err) {     
	    gpio.write(gpioPin,input_value, function() {          
	        gpio.close(gpioPin);                    
	    });
	});

};

module.exports.getPubClient = function (DEVICE_ID,DEVICE_KEY) {	
	pub_client = mqtt.createClient(PUB_PORT, SERVER_IP, {
		username: DEVICE_ID,
		password: DEVICE_KEY 
	});
	mqtt_client.options.reconnectPeriod = 5;

	return pub_client;
};

module.exports.getSubClient = function (DEVICE_ID,DEVICE_KEY) {	
	sub_client = mqtt.createClient(SUB_PORT, SERVER_IP, {
		username: DEVICE_ID,
		password: DEVICE_KEY 
	});
	mqtt_client.options.reconnectPeriod = 5;

	return sub_client;
};		


