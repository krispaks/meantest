var usersController = require('../controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app){
	app.route('/signup')
		.get(usersController.renderSignup)
		.post(usersController.signup);
		
	app.route('/signin')
		.get(usersController.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));
		
	app.get('/signout', usersController.signout);
	
	app.route('/users')
		.post(usersController.create)
		.get(usersController.list);
		
	app.route('/users/:userId')
		.get(usersController.read)
		.put(usersController.update)
		.delete(usersController.delete);
		
	app.param('userId', usersController.userByID);
};
