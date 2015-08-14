var users = require('../../app/controllers/user.server.controller');

module.exports = function(app){
	app.route('/users')
	.post(users.create)
	.get(function(req, res, next){
		res.send('Galing sa dodo ng cow 2');
	});
};
