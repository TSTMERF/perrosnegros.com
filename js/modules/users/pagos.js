(function(){
	//start mean module
	angular.module('paymentModule',[])
	//defining mean directive
	.directive('paymentDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/users/pagos.html',
			controller: 'userPaymentController'
		};
	})
	/*CONTROLLER*/
	.controller('userPaymentController', function($location,$scope,$window,$route){
		//select parcialidades
		$scope.payments=[
			{id:1, name:1},
			{id:2, name:2},
			{id:3, name:3},
			{id:4, name:4},
			{id:5, name:5},
			{id:6, name:6},
			{id:7, name:7},
			{id:8, name:8},
			{id:9, name:9},
			{id:10, name:10}
		];
	});
})();