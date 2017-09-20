//wrap the module
(function(){
	//start mean module
	angular.module('eventModule',[])
	//defining mean directive
	.directive('eventDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/event.html',
			controller: 'eventController'
		};
	})
	/*CONTROLLER*/
	.controller('eventController', function ($scope) {
	});
})();