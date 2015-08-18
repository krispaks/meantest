var Post = require('mongoose').model('post');

exports.list = function(req, res, next){
	Post.find({}, function(err, posts){
		if(err){
			return next(err);
		}
		else{
			res.json(posts);
		}
	});
};

exports.create = function(req, res, next){
	
	console.log(JSON.stringify(req.body));
	var post = new Post(req.body);
	
	post.save(function(err){
		if(err){
			return next(err);
		}
		else
		{
			res.json(post);
		}
	});
};