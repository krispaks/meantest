define(['angular', 'require'], function(angular, requirejs){
	'use strict';
	
	var articleModule = angular.module('articles', []);
	
	/*var articleRoute = requirejs('./articles.client.routes');
	var articleService = requirejs('./articles.client.service');
	var articleController = requirejs('./articles.client.controller');*/
	
	/*requirejs(['./articles.client.routes'
			, './articles.client.service'
			, './articles.client.controller'], 
			function(){
			
		});*/
	
	return articleModule;
});