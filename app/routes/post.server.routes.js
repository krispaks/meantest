var postController = require('../controllers/post.server.controller');

module.exports = function(app){
	app.route('/posts')
		.get(postController.list)
		.post(postController.create);
};