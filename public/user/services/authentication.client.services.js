/*angular.module('users').factory('Authentication', [function(){
	this.user = window.user;
	
	return {
		user: this.user
	};
}]);*/

define(['angular'], function(angular, users){
	'use strict';
	
	return angular.module('users').factory('Authentication', [function(){
		this.user = window.user;
		
		return {
			user: this.user
		};
	}]);
});