var passport = require('passport');
var url = require('url');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('../config');
var userController = require('../../app/controllers/user.server.controller');

module.exports = function(){
	passport.use(new TwitterStrategy({
		consumerKey: config.twitter.clientID,
		consumerSecret: config.twitter.clientSecret,
		callbackURL: config.twitter.callbackURL,
		//enableProof: false,
		passReqToCallbacl: true
		//profileFields: ['email', 'name', 'displayName']
	}, function(req, token, tokenSecret, profile, done){
		var providerData = profile._json;
		providerData.token = token;
		providerData.tokenSecret = tokenSecret;
		
		var providerUserProfile = {
			fullName: profile.displayName,
			username: profile.username,
			provider: 'twitter',
			providerId: profile.id,
			providerData: providerData
		};
		
		userController.saveOAuthUserProfile(req, providerUserProfile, done);
	}));
};