//wrap the module
(function(){
	//start mean module
	angular.module('trainingModule',[])
	//defining mean directive
	.directive('trainingDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/users/inf_training.html',
			controller: 'userTrainingController'
		};
	})
	/*CONTROLLER*/
	.controller('userTrainingController', function($location,$scope,$window){
		//define back method
		$scope.back=function(){
			//go back history
			$window.history.back();
		}
		/*$scope.send=function(){
			$location.href="#/parents/";
		}*/
		//define sport method
		$scope.sports=[
			{id:1, name:'Novato'},
			{id:2, name:'Veterano'}
		];
		$scope.Categories=[
			{id:1, name:'Ardillas'},
			{id:2, name:'Castores'},
			{id:3, name:'Zorros'},
			{id:4, name:'Rabbits'},
			{id:5, name:'Hornets'},
			{id:6, name:'Irons'},
			{id:7, name:'Falcons'},
			{id:8, name:'Tauros'},
			{id:9, name:'Ponys'},
			{id:10, name:'Juvenil Otoño'},
			{id:11, name:'Juvenil Primavera'},
			{id:6, name:'Femenil Otoño'},
			{id:6, name:'Femenil Primavera'},
			{id:6, name:'Femenil Otra'}
		];
	});
})();