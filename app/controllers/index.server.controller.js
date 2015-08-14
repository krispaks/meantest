exports.render = function(req, res)
{
	if(req.session.lastVisit){
		console.log('lastVist: ' + req.session.lastVisit);
	}
	
	req.session.lastVisit = new Date();
	
	res.render('index', {title: "Galing sa dodo ng cow"});
};