angular.module('articles').controller('ArticlesController', 
	['$scope', 
	'$routeParams', 
	'$location', 
	'Authentication', 
	'Articles', function($scope, $routeParams, $location, Authentication, Articles){
		$scope.authentication = Authentication;
		
		$scope.create = function(){
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			
			article.$save(function(response){
				$location.path('articles/' + response._id)
			}, function(errorResponse){
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);