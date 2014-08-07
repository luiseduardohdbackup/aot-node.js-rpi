
var aotrpi = require('../aot-rpi');
var DEVICE_ID = "D33373850674";
var DEVICE_KEY = "5132766e835047ed";
var NODE_ID = "4";
var gpioPin = 16;


var client = aotrpi.getSubClient(DEVICE_ID,DEVICE_KEY);

client.subscribe('/'+DEVICE_ID+'/subscribe');
client.on('message', function (topic, message) { 
	
	try {
        
	  	var data = JSON.parse(message);
	  	var node_id = data.node_id;
	  	var request_value = data.request_value;

	  	console.log(request_value);
        if(node_id == NODE_ID){

			if(request_value == "true"){
				aotrpi.gpioWrite(gpioPin,1);
			} else if(request_value == "false"){
				aotrpi.gpioWrite(gpioPin,0);
			}
        } 
		
	} catch (e) {
  		console.log(e);
  	}

});


