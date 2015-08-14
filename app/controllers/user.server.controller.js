var User = require('mongoose').model('user1');

exports.read = function(req, res){
	res.json(req.user);
};

exports.create = function(req, res, next)
{
	console.log(JSON.stringify(req.body));
	var user = new User(req.body);
	
	user.save(function(err){
		if(err){
			return next(err);
		}
		else{
			res.json(user);
		}
	});
};

exports.list = function(req, res, next){
	User.find({}, function(err, users){
		if(err){
			return next(err);
		}
		else{
			res.json(users);
		}
	});
};

exports.userByID = function(req, res, next, id){
	User.findOne({_id: id}, function(err, user){
		if(err){
			return next(err);
		}
		else{
			req.user = user;
			next();
		}
	});
};

exports.update = function(req, res, next){
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
		if(err){
			return next(err);
		}
		else{
			res.json(user);
		}
	});
};

exports.delete = function(req, res, next){
	
	// code below has same effect
	/*req.user.remove(function(err){
		if(err){
			return next(err);
		}
		else{
			res.json(req.user)
		}
	});
	*/
	
	console.log("deleting userId: " + req.user.id);
	
	User.remove({_id: req.user.id}, function(err){
		if(err){
			next(err);
		}
		else{
			res.json(req.user);
		}
	})	
};