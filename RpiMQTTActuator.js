var gpio = require("pi-gpio");
var mqtt = require('mqtt');

var SERVER_IP = "218.239.45.45";
var PORT = 1887;

var DEVICE_ID = "D33373850674";
var DEVICE_KEY = "5132766e835047ed";
var NODE_ID = "4";
var gpioPin = 16;

var client = mqtt.createClient(PORT, SERVER_IP, {
	username: DEVICE_ID,
	password: DEVICE_KEY 
});

client.subscribe('/'+DEVICE_ID+'/subscribe');
client.on('message', function (topic, message) { 
	
	try {
        
	  	var data = JSON.parse(message);
	  	var node_id = data.node_id;
	  	var request_value = data.request_value;

	  	console.log(request_value);
        if(node_id == NODE_ID){

			if(request_value == "true"){
				gpio.open(gpioPin, "output", function(err) {     
				    gpio.write(gpioPin, 1, function() {          
				        gpio.close(gpioPin);                    
				    });
				});
			} else if(request_value == "false"){
				gpio.open(gpioPin, "output", function(err) {     
				    gpio.write(gpioPin, 0, function() {          
				        gpio.close(gpioPin);                    
				    });
				});
			}
        } 
		
	} catch (e) {
  		console.log(e);
  	}

});
client.options.reconnectPeriod = 5;

