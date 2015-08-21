exports.render = function(req, res)
{
	if(req.session.lastVisit){
		console.log('lastVist: ' + req.session.lastVisit);
	}
	
	req.session.lastVisit = new Date();
	
	// NOTE: the value of req.user differentiates depending on the passport strategy
	
	res.render('index', {title: 'Hello World', userFullName: req.user ? req.user.username : ''});
};