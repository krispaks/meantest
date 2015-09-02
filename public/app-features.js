define(['require'
	, 'angular',
	, 'user/users.client.module'
	, 'articles/articles.client.module'
	, 'user/authentication.client.services'
	, 'articles/articles.client.routes'
	, 'articles/articles.client.service'
	, 'articles/articles.client.controller'	
	], function(requirejs, angular){
		'use strict';
				
		/*, 'user/authentication.client.services'
	, 'articles/articles.client.routes'
	, 'articles/articles.client.service'
	, 'articles/articles.client.controller'*/
		
		/*requirejs(['user/authentication.client.services'
			, 'articles/articles.client.routes'
			, 'articles/articles.client.service'
			, 'articles/articles.client.controller'], 
			function(){
				return angular.module('appFeatures', ['users', 'articles']);
		});*/
		
		//var appFeatureModule = angular.module('appFeatures', ['ngRoute','ngResource', 'users', 'articles']);
		
		
		//return appFeatureModule;
		
		return angular.module('appFeatures', ['users', 'articles']);
});