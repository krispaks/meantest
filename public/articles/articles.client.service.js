
// NOTE: this resource is being called like this $scope.article.$update. @_id comes is a property in article.
// it means that it will assign the _id to articleId

define(['angular'], function(angular){
	'use strict';
	
	return angular.module('articles').factory('Articles', ['$resource', function($resource){
	return $resource('api/articles/:articleId', 
		{
			articleId: '@_id'
		}, 
		{
			update: {
				method: 'PUT'
			}
		});
	}]);
});