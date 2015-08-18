var config = require('./config');
var mongoose = require('mongoose');

module.exports = function()
{
	var db = mongoose.connect(config.dbConnection);
	
	require('../app/models/user.server.model');
	require('../app/models/post.server.model');
	
	return db;
}