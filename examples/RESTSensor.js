
var aotrpi = require('../lib/aot-rpi');
var sensor = require('ds18x20');
var AUTHORIZATION = "Basic RDI0MTQ3NDgwMjQ5OjBjNmVhNjk1ZmZjZDQwOGQ=";
var DEVICE_ID = "D24147480249";
var NODE_ID = "1";


var isLoaded = sensor.isDriverLoaded();
console.log(isLoaded);

try {
    sensor.loadDriver();
    console.log('driver is loaded');
} catch (err) {
    console.log('something went wrong loading the driver:', err)
}

setInterval(function() {
	    
	var value = sensor.get('28-000004ccd5d4');
    console.log(value);
	var content =[{
		"content_value" : value+""
	}];
	console.log(content);
	aotrpi.post(AUTHORIZATION,DEVICE_ID,NODE_ID,content);
	
	
}, 5*1000);
