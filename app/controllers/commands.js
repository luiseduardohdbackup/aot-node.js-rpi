var gpio = require("pi-gpio");
var gpioPin = 16;

exports.excute = function(req, res) {


	var device_id = req.params.device_id;
	var node_id = req.params.node_id;
	var command = req.params.command;

    console.log(device_id);
  	console.log(command);

	if(command == "true"){
		gpio.open(gpioPin, "output", function(err) {     
		    gpio.write(gpioPin, 1, function() {          
		        gpio.close(gpioPin);                    
		    });
		});
	} else if(command == "false"){
		gpio.open(gpioPin, "output", function(err) {     
		    gpio.write(gpioPin, 0, function() {          
		        gpio.close(gpioPin);                    
		    });
		});
	}

       		
}


