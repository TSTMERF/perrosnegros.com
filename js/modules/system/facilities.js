(function(){
	//start mean module
	angular.module('facilitiesModule',[])
	//defining mean directive
	.directive('facilitiesDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/facilities.html',
			controller: 'facilitiesController'
		};
	})
	/*CONTROLLER*/
	.controller('facilitiesController', function ($scope,$mdDialog) {
		/*---------------------------------Entrenamiento----------------------------------------*/
       $scope.showEntre = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Entrenamiento.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
        	$location.path('/facilities/');
			$window.scrollTo(0,0);
            $mdDialog.hide(answer);
        };
      }



      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------PASTO SINTETICO----------------------------------------*/
       $scope.showPS = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/PastoS.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------PASTO Natural----------------------------------------*/
       $scope.showPN = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/PastoN.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------TRIBUNA LOCAL----------------------------------------*/
       $scope.showTL = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/TribunaL.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------TRIBUNA VISITANTE----------------------------------------*/
       $scope.showTV = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/TribunaV.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------PAlco de sonido----------------------------------------*/
       $scope.showPalcoS = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/PalcosS.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------baños tribuna local----------------------------------------*/
       $scope.showBTL = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/BanosTL.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
       /*---------------------------------Vestidores----------------------------------------*/
       $scope.showVE = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Vestidores.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
       /*---------------------------------MarcadorE----------------------------------------*/
       $scope.showME = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/MarcadorE.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------Casilleros----------------------------------------*/
       $scope.showCA = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Casilleros.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------Auditorio----------------------------------------*/
       $scope.showAU = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Auditorio.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
       /*---------------------------------Cafeteria----------------------------------------*/
       $scope.showCF = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Cafeteria.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/

      /*---------------------------------Boutique----------------------------------------*/
       $scope.showBO = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/Boutique.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/

     /*---------------------------------area administrativa----------------------------------------*/
       $scope.showAA = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/AreaAdm.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
      /*---------------------------------expendio de fruta y jugo----------------------------------------*/
       $scope.showFJ = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/EFYJ.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
       /*---------------------------------CANCHA DE BASKETBALL----------------------------------------*/
       $scope.showCB = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/CanchaB.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/
       /*---------------------------------BAÑO VISITANTES----------------------------------------*/
       $scope.showBV = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/BanosV.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*----------------------------------------------------------------------------------------*/

      /*------------------------------Medical service--------------------------------------------*/

      $scope.showSer = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl:'html/system/EstamosTrabajando.html',
            //templateUrl: 'html/system/Instalaciones/MedicalService.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
              $scope.status = 'You cancelled the dialog.';
          });
        };
        function DialogController($scope, $mdDialog) {
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
      }

      /*-----------------------------------------------------------------------------------------*/

      /*-------------------------------GIMNASIO---------------------------------------------------*/
      	$scope.showGim = function(ev) {
    		$mdDialog.show({
      			controller: DialogController,
      			templateUrl:'html/system/EstamosTrabajando.html',
      			//templateUrl: 'html/system/Instalaciones/Gimnasio.html',
      			parent: angular.element(document.body),
      			targetEvent: ev,
      			clickOutsideToClose:true
    		})
    		.then(function(answer) {
      			$scope.status = 'You said the information was "' + answer + '".';
    			}, function() {
      				$scope.status = 'You cancelled the dialog.';
    			});
  			};
        function DialogController($scope, $mdDialog) {
    		$scope.answer = function(answer) {
      			$mdDialog.hide(answer);
    		};
   		}
   	/*------------------------------------------------------------------------------------------*/

   	/*----------------------------------PALCOS--------------------------------------------------*/

   		$scope.showPal = function(ev) {
    		$mdDialog.show({
      			controller: DialogController,
      			templateUrl:'html/system/EstamosTrabajando.html',
      			//templateUrl: 'html/system/Instalaciones/Palcos.html',
      			parent: angular.element(document.body),
      			targetEvent: ev,
      			clickOutsideToClose:true
    		})
    		.then(function(answer) {
      			$scope.status = 'You said the information was "' + answer + '".';
    			}, function() {
      				$scope.status = 'You cancelled the dialog.';
    			});
  			};
        function DialogController($scope, $mdDialog) {
    		$scope.answer = function(answer) {
      			$mdDialog.hide(answer);
    		};
   		}
   	/*--------------------------------------------------------------------------------------------*/

   	/*-------------------------sala de juntas----------------------------------------------*/

   		$scope.showBB = function(ev) {
    		$mdDialog.show({
      			controller: DialogController,
      			templateUrl:'html/system/EstamosTrabajando.html',
      			//templateUrl: 'html/system/Instalaciones/Buildings.html',
      			parent: angular.element(document.body),
      			targetEvent: ev,
      			clickOutsideToClose:true
    		})
    		.then(function(answer) {
      			$scope.status = 'You said the information was "' + answer + '".';
    			}, function() {
      				$scope.status = 'You cancelled the dialog.';
    			});
  			};
        function DialogController($scope, $mdDialog) {
    		$scope.answer = function(answer) {
      			$mdDialog.hide(answer);
    		};
   		}
	});
})();