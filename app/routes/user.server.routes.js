var usersController = require('../controllers/user.server.controller');

module.exports = function(app){
	app.route('/users')
		.post(usersController.create)
		.get(usersController.list);
		
	app.route('/users/:userId')
		.get(usersController.read)
		.put(usersController.update)
		.delete(usersController.delete);
		
	app.param('userId', usersController.userByID);
};
