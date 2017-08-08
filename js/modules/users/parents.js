//wrap the module
(function(){
	//start mean module
	angular.module('parentsModule',[])
	//defining mean directive
	.directive('parentsDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/users/parents.html',
			controller: 'userparentsController'
		};
	})
	/*CONTROLLER*/
	.controller('userparentsController', function($location,$scope,$window){
		//define back method
		$scope.back=function(){
			//go back history
			$window.history.back();
		}


		$scope.ClearFather=function(){
			$scope.info.FatherName="";
			$scope.info.FatherLastName="";
			$scope.info.ProfessionF="";
			$scope.info.FatherPhoneP="";
			$scope.info.FatherPhoneM="";
			$scope.info.FatherEmail="";
		}

		$scope.ClearMother=function(){
			$scope.info.MotherName="";
			$scope.info.MotherLastName="";
			$scope.info.ProfessionM="";
			$scope.info.MotherPhoneP="";
			$scope.info.MotherPhoneM="";
			$scope.info.MotherEmail="";
		}
		//define go method
		/*$scope.go=function(){
			$location.href="#/medico/";
		}*/
	});
})();