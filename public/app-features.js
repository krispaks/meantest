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
		
		// NOTE: the above setup where it will load all the files causes failure at times. 
		// probably because files are loading asynchronously. need to find a way to organize them properly.
		// I've tried below where in i required all other files except the 2 primary modules but doesnt seem to work.
		// looks like the other controllers, routes and services are not attached.
				
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