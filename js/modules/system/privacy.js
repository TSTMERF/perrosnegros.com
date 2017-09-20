//wrap the module
(function(){
	//start mean module
	angular.module('privacyModule',[])
	//defining mean directive
	.directive('privacyDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/privacy.html',
			controller: 'privacyController'
		};
	})
	/*CONTROLLER*/
	.controller('privacyController', function ($scope) {
	});
})();