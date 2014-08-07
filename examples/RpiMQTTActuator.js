
var aotrpi = require('../aot-rpi');
var DEVICE_ID = "D43909863659";
var DEVICE_KEY = "22b342d1382c4b0b";
var NODE_ID = "2";
var gpioPin = 16;


var sub_client = aotrpi.getSubClient(DEVICE_ID,DEVICE_KEY);

sub_client.subscribe('/'+DEVICE_ID+'/subscribe');
sub_client.on('message', function (topic, message) { 
	
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


