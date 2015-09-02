define(['require', 'angular'
	,'user/users.client.module'
	,'articles/articles.client.module'], 
	function(requirejs, angular){
		'use strict';
		
		requirejs(['user/authentication.client.services'
			, 'articles/articles.client.routes'
			, 'articles/articles.client.service'
			, 'articles/articles.client.controller'], function(){
			
		});
		
		return angular.module('appFeatures', ['users', 'articles']);
});