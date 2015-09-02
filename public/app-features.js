define(['require'
	, 'angular',
	,'user/users.client.module'
	,'articles/articles.client.module'], 
	function(requirejs, angular){
		'use strict';
		
		var appFeatureModule = angular.module('appFeatures', ['ngRoute','ngResource', 'users', 'articles']);
		
		requirejs(['user/authentication.client.services'
			, 'articles/articles.client.routes'
			, 'articles/articles.client.service'
			, 'articles/articles.client.controller'], function(){
			
		});
		
		return appFeatureModule;
});