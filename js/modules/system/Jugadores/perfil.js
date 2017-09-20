(function(){
  //start mean module
  angular.module('profileModule',[])
  //defining mean directive
  .directive('profileDirective',function(){
    //return function
    return{
      restrict:'E',
      replace:true,
      templateUrl:'html/system/Jugadores/perfil.html',
      controller: 'userProfileController'
    };
  })
  /*CONTROLLER*/
  .controller('userProfileController', function($location,$scope,$window,$route){
    //select parcialidades
    $scope.back=function(){
      //go back history
      $window.history.back();
    }
  });
})();