(function(){
	//start mean module
	angular.module('medicoModule',[])
	//defining mean directive
	.directive('medicoDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/users/medico.html',
			controller: 'userMedicoController'
		};
	})
	/*CONTROLLER*/
	.controller('userMedicoController', function($location,$scope,$window,$route){
		//define back method
		$scope.back=function(){
			//go back history
			$window.history.back();
		}
		$scope.refresh=function(){
			$route.reload();
		}
		$scope.next=function(){
			$location.path("/training");
		}
		/*$scope.go=function(){
			$location.href="#/parents/";
		}*/
		//define the insurance select
		$scope.insurances=[
			{id:1, name:"N/A"},
			{id:2, name:"IMSS"},
			{id:3, name:"ISSSTE"},
			{id:4, name:"Privado"}
		];
		//define the medicin select
		$scope.medicin=[
			{id:1, name:'si'},
			{id:2, name:'no'},
			{id:3, name:'no aplica'}
		];
		//define the necessities select
		$scope.necessities=[
			{id:1, name:'Aparatos de Ortodoncia'},
			{id:2, name:'Lentes de Contacto'},
			{id:3, name:'Marcapasos'},
		];
		//define the blood type select
		$scope.blood=[
			{id:1, type:'No sé'},
			{id:2, type:'Grupo sanguineo A. Factor RH +'},
			{id:3, type:'Grupo sanguineo A. Factor RH -'},
			{id:4, type:'Grupo sanguineo B. Factor RH +'},
			{id:5, type:'Grupo sanguineo B. Factor RH -'},
			{id:6, type:'Grupo sanguineo O. Factor RH +'},
			{id:7, type:'Grupo sanguineo O. Factor RH -'},
			{id:8, type:'Grupo sanguineo AB. Factor RH +'},
			{id:9, type:'Grupo sanguineo AB. Factor RH -'}
		];

 		//Disable aseguradora when Insurance = N/A


	});
})();