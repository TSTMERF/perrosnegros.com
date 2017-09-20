(function(){
	//start mean module
	angular.module('signInModule',[])
	//defining mean directive
	.directive('signInDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/EstamosTrabajando.html',
			controller: 'signInController'
		};
	})
	/*CONTROLLER*/
	.controller('signInController', function ($scope,$mdDialog) {
	});
})();