var indexController = require('../controllers/index.server.controller');

module.exports = function(app){
	app.get('/', indexController.render)
};