
var aotrpi = require('../lib/aot-rpi');
var gpio = require("pi-gpio");
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
				gpio.open(gpioPin, "output", function(err) {     
				    gpio.write(gpioPin,1, function() {          
				        gpio.close(gpioPin);                    
				    });
				});
			} else if(request_value == "false"){
				gpio.open(gpioPin, "output", function(err) {     
				    gpio.write(gpioPin,0, function() {          
				        gpio.close(gpioPin);                    
				    });
				});
			}
        } 
		
	} catch (e) {
  		console.log(e);
  	}

});

sub_client.on('error', function(err) {
	//client.stream.end();
    console.log('error!');
});


