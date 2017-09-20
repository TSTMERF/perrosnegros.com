//wrap the module
(function(){
	//start mean module
	angular.module('categoryModule',[])
	//defining mean directive
	.directive('categoryDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/EstamosTrabajando.html',
			controller: 'categoryController'
		};
	})
	//configurate the module
	.config(function($mdIconProvider) {
    $mdIconProvider
    //.defaultIconSet('img/icons/sets/core-icons.svg', 24);
	})
/********************filtra las combinaciones rápidas del teclado*************************/
  	/*.filter('keyboardShortcut', function($window) {
  	  return function(str) {
      if (!str) return;

      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);
      var seperator = (!isOSX || keys.length > 2) ? '+' : '';
      var abbreviations = {
        M: isOSX ? '⌘' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };

      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
      };
    })*/
  	.controller('categoryController', function DemoCtrl($mdDialog, $scope, $location) {
      /********************Submenu Inside Categories****************************/

    /*BABY*/
    $scope.gotoArdillas=function(){
      $location.path('/Ardillas/');
    }
    $scope.gotoCastores=function(){
      $location.path('/Castores/'); 
    }
    $scope.gotoZorros=function(){
      $location.path('/Zorros/');
    }
    /*CHILDISH*/
    $scope.gotoRabbits=function(){
      $location.path('/Rabbits/');
    }
    $scope.gotoHornets=function(){
      $location.path('/Hornets/');
    }
    $scope.gotoIrons=function(){
      $location.path('/Irons/');
    }
    $scope.gotoFalcons=function(){
      $location.path('/Falcons/');
    }
    $scope.gotoTauros=function(){
      $location.path('/Tauros/');
    }
    $scope.gotoPonys=function(){
      $location.path('/Ponys/');
    }
    /*YOUTH*/
    $scope.gotoSpringY=function(){
     $location.path('/Varonil_Primavera/');
    }
    $scope.gotoAutumnY=function(){
      $location.path('/Varonil_Otoño/');
    }
    /*FEMALE*/
    $scope.gotoSpringF=function(){
      $location.path('/Femenil_Kid/');
    }
    $scope.gotoAutumnF=function(){
      $location.path('/Femenil_Rockies/');
    }
    $scope.gotoSpringF2=function(){
      $location.path('/Femenil_Juvenil/');
    }
    this.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };

    this.sampleAction = function(name, ev) {
      $mdDialog.show($mdDialog.alert()
        .title(name)
        .textContent('You triggered the "' + name + '" action')
        .ok('Great')
        .targetEvent(ev)
      );
    };
  });
})();
