var mainApplicationModuleName = "mean";

var mainApplicationModule = angular.module(mainApplicationModuleName, []);

angular.element(document).read(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});

