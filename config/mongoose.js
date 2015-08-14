var config = require('./config');
var mongoose = require('mongoose');

module.exports = function()
{
	var db = mongoose.connect(config.dbConnection);
	
	require('../app/models/user.server.model');
	
	return db;
}