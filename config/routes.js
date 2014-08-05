var commands = require('../app/controllers/commands');

module.exports = function (app, router) {

	app.use('/api', router);

	router.use(function(req, res, next) {
		console.log('%s %s %s', req.method, req.url, req.path);
	  	next();
	});

	// COMMAND 실행
	router.route('/commands/:device_id/:node_id/:command')
	    .post(commands.excute);
	        
}