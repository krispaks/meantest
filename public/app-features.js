define(['angular'
	,'user/users.client.module'
	,'user/authentication.client.services'
	,'articles/articles.client.module'
	,'articles/articles.client.routes'
	,'articles/articles.client.service'
	,'articles/articles.client.controller'], 
	function(angular){
		'use strict';
		return angular.module('appFeatures', ['users', 'articles']);
});