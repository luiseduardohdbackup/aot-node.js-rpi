
var aotrpi = require('../lib/aot-rpi');
var sensor = require('ds18x20');
var DEVICE_ID = "D43909863659";
var DEVICE_KEY = "22b342d1382c4b0b";
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
   
    var pub_client = aotrpi.getPubClient(DEVICE_ID,DEVICE_KEY);
    var value = sensor.get('28-000004ccd5d4');
    console.log(value);
    
    var content = {
        "message_type" : "node.content",
        "device_id" : DEVICE_ID,
        "device_key" : DEVICE_KEY,
        "node_id" : NODE_ID,
        "content_value" : value+""
    };
    console.log(JSON.stringify(content)); 
    pub_client.publish('/'+DEVICE_ID+'/publish', JSON.stringify(content));
    pub_client.on('error', function(err) {
        //client.stream.end();
        console.log('error!');
    });
    pub_client.end();
    console.log("success !!");  
    

}, 5*1000);


