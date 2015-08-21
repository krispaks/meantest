module.exports = {
	sessionSecret: 'developmentSessionSecret',
	dbConnection: 'mongodb://localhost/test',
	facebook: {
		clientID: '1625422484406795',
		clientSecret: 'a5e48577afadb5bd88b2b140a1dbe5e3',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: '27NlgVKfUVPafryCltkhFKfY1',
		clientSecret: 'khum4r1knSf2esa0I9BEifkc7eRUno8ysORPNO1YIoygUwh3lg',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	}
};