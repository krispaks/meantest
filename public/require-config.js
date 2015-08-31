'use strict';

requirejs.config({
	paths: {
		angular: '/lib/angular/angular',
		angularRoute: '/lib/angular-route/angular-route',
		angularResource: '/lib/angular-resource/angular-resource',
		user: '/user/'
	},
	shim: {
		'angular': { 'exports': 'angular' },
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		'uiBootstrap': ['angular']
	}
});