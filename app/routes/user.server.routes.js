var usersController = require('../controllers/user.server.controller');
var passport = require('passport');

module.exports = function(app){
	
	// local
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
	
	// facebook
	app.get('/auth/facebook', passport.authenticate('facebook',{
		scope: [ 'email' ],
		failureRedirect: '/signin'
	}));
	
	app.get('/auth/facebook/callback', passport.authenticate('facebook',{
		scope: [ 'email' ],
		failureRedirect: '/signin',
		successRedirect: '/'
	}));
	
	// users	
	app.route('/users')
		.post(usersController.create)
		.get(usersController.list);
		
	app.route('/users/:userId')
		.get(usersController.read)
		.put(usersController.update)
		.delete(usersController.delete);
		
	app.param('userId', usersController.userByID);
};
