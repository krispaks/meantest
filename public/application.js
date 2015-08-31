/*var mainApplicationModuleName = "mean";

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource','ngRoute','users','example', 'articles']);

mainApplicationModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);

if(window.location.hash === '#_=_'){
	window.location.hash = '#!'
}

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});*/

'use strict';

requirejs(['require-config'], function(){
	requirejs(['app-lib', function(appLib){
		
		var mainApplicationModuleName = "mean";
		
		//var mainAplicationModule = angular.module(mainApplicationModuleName, ['ngResource','ngRoute','users','example','articles']);
		var mainAplicationModule = appLib.angular.module(mainApplicationModuleName, ['ngResource','ngRoute']);
		
		mainAplicationModule.config(['$locationProvider', function($locationProvider){
			$locationProvider.hashPrefix('!');
		}]);
		
		if(window.location.hash === '#_=_'){
			window.location.hash = '#!'
		}
		
		appLib.angular.element(document).ready(function(){
			appLib.angular.bootstrap(document, [mainApplicationModuleName]);
		});
		
		return mainAplicationModule;
	}]);
});