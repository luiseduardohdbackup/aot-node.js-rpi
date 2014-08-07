
var request = require('request');
var gpio = require("pi-gpio");

var SERVER_IP = "218.239.45.45:5001";
var AUTHORIZATION = "Basic RDcwMTI3MTc2NjEwOm51bGw=";
var DEVICE_ID = "D70127176610";
var NODE_ID = "1";
var SENSOR_INPUT_PIN = 18;

var options = {
    url: "http://"+SERVER_IP+"/devices/"+DEVICE_ID+"/nodes/"+NODE_ID+"/contnts",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': AUTHORIZATION
    }
};

function post(content){
	request.post(options, function optionalCallback (err, httpResponse, body){

	    if (err) {
			console.error(err);
		}
	    console.log("success !!");

	}).json(content);
}

setInterval(function() {
	var content = getContent();
	post(content);

}, 5*1000);


function getContent(){
    var content = "";
	gpio.read(SENSOR_INPUT_PIN, function(err, value) {
	    if(err) throw err;
	    var content =[{
    		"content_value" : value
		}];
		console.log(content); 
        return content;
	});
}





