define(['angular'], function(angular){
	'use strict';
	
	var mainModule = angular.module('appModule', ['appLib', 'appFeatures'])
	.config(['$locationProvider', function($locationProvider){
		$locationProvider.hashPrefix('!');
	}]);
	
	if(window.location.hash === '#_=_'){
			window.location.hash = '#!'
    }
	
	angular.element(document).ready(function(){
			angular.bootstrap(document, [mainModule['name']]);
	});
	
	return mainModule;
});