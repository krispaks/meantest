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
	
	// NOTE: problem with current facebook process is when used with routing it adds #_=_ and it messes things up. need to be resolved.
	/*app.get('/auth/facebook/callback', function(req, res, next) {
		passport.authenticate('facebook', function(err, user, info) {
			if (err) { 
				return next(err); 
			}
			if (!user) { 
				return res.redirect('/login'); 
			}
			res.redirect('/#!/');
		})(req, res, next);
	});*/
	
	// twitter
	app.get('/auth/twitter', passport.authenticate('twitter',{
		failureRedirect: '/signin'
	}));
	
	app.get('/auth/twitter/callback', passport.authenticate('twitter',{
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
