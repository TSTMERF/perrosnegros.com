//wrap the module
(function(){
	//start mean module
	angular.module('meanModule',['ngMessages', 'ngMaterial'])
	//defining mean directive
	.directive('meanDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/home.html',
			controller:'meanController'
		};
	})
	//defining controller
	.controller('meanController', function($route,$window,$scope,$location,$anchorScroll,$http,$mdDialog, $interval){
		
		$scope.login = function(){
			$location.path('/login/');	
		}
		//GoTo sections for page---------------------------------------------------------------
		$scope.gotoTop = function() {
			$scope.showTeam=false;
			$scope.showContact=false;
			$scope.showAbout=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showCategories=false;
			$scope.showGallery=false;
            $scope.showEvent=false;
			$location.hash('top');
			$anchorScroll();
		};

		$scope.showAbout=false;
		$scope.gotoAbout = function() {
			$scope.showTeam=false;
			$scope.showContact=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showCategories=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showAbout=true;
			$location.hash('about');
			$anchorScroll();
		};
		$scope.showGallery=false;
		$scope.gotoGallery = function() {
			$scope.showTeam=false;
			$scope.showContact=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showCategories=false;
			$scope.showAbout=false;
			$scope.showGallery=true;
                       $scope.showEvent=false;
			$location.hash('gallery');
			$anchorScroll();
		};
               $scope.showEvent=false;
		$scope.gotoEvent = function() {
			$scope.showAbout=false;
			$scope.showCategories=false;
			$scope.showTeam=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showGallery=false;
			$scope.showContact=false;
			$scope.showEvent=true;
			$location.hash('event');
			$anchorScroll();
		};

		$scope.showFacilities=false;
		$scope.gotoFacilities = function() {
			$scope.showAbout=false;
			$scope.showContact=false;
			$scope.showPrivacy=false;
			$scope.showCategories=false;
			$scope.showTeam=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showFacilities=true;
			$location.hash('facilities');
			$anchorScroll();
		};
		$scope.showPrivacy=false;
		$scope.gotoNoticePrivacy = function() {
			$scope.showAbout=false;
			$scope.showContact=false;
			$scope.showCategories=false;
			$scope.showTeam=false;
			$scope.showFacilities=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showPrivacy=true;
			$location.hash('noticeprivacy');
			$anchorScroll();
		};

		$scope.showTeam=false;
		$scope.gotoTeam = function() {
			$scope.showAbout=false;
			$scope.showContact=false;
			$scope.showCategories=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showTeam=true;
			$location.hash('team');
			$anchorScroll();
		};
		$scope.showContact=false;
		$scope.gotoContact = function() {
			$scope.showAbout=false;
			$scope.showCategories=false;
			$scope.showTeam=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showContact=true;
			$location.hash('contact');
			$anchorScroll();
		};
		
		$scope.showCategories=false;
		$scope.gotoCategory=function(){
			$scope.showAbout=false;
			$scope.showContact=false;
			$scope.showTeam=false;
			$scope.showFacilities=false;
			$scope.showPrivacy=false;
			$scope.showGallery=false;
                        $scope.showEvent=false;
			$scope.showCategories=true;
			$location.hash('categories');
			$anchorScroll();
		}
		/********************Menu Inside Categories****************************/

		/*BABY*/
		$scope.gotoArdillas=function(){
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=false;
			$scope.showHornets=false;
			$scope.showRabbits=false;
			//
			$scope.showCastores=false;
			$scope.showZorros=false;
			$scope.showArdillas=true;
			$location.hash('categories/Ardillas');
			$anchorScroll();
		}
		$scope.gotoCastores=function(){
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=false;
			$scope.showHornets=false;
			$scope.showRabbits=false;
			//
			$scope.showArdillas=false;
			$scope.showZorros=false;
			$scope.showCastores=true;
			$location.hash('categories/Castores');
			$anchorScroll();
		}
		$scope.gotoZorros=function(){
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=false;
			$scope.showHornets=false;
			$scope.showRabbits=false;
			//
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=true;
			$location.hash('categories/Zorros');
			$anchorScroll();
		}
		/*CHILDISH*/
		$scope.gotoRabbits=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=false;
			$scope.showHornets=false;
			$scope.showRabbits=true;
			$location.hash('categories/Rabbits');
			$anchorScroll();
		}
		$scope.gotoHornets=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showRabbits=false;
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=false;
			$scope.showHornets=true;
			$location.hash('categories/Hornets');
			$anchorScroll();
		}
		$scope.gotoIrons=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=false;
			$scope.showIrons=true;
			$location.hash('categories/Irons');
			$anchorScroll();
		}
		$scope.gotoFalcons=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showPonys=false;
			$scope.showTauros=false;
			$scope.showFalcons=true;
			$location.hash('categories/Falcons');
			$anchorScroll();
		}
		$scope.gotoTauros=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showPonys=false;
			$scope.showTauros=true;
			$location.hash('categories/Tauros');
			$anchorScroll();
		}
		$scope.gotoPonys=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=true;
			$location.hash('categories/Ponys');
			$anchorScroll();
		}


		/*YOUTH*/
		$scope.gotoSpringY=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showAutumnYouth=false;
			$scope.showSpringYouth=true;
			$location.hash('categories/Primavera-Juvenil');
			$anchorScroll();
		}
		$scope.gotoAutumnY=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=false;
			//
			$scope.showSpringYouth=false;
			$scope.showAutumnYouth=true;
			$location.hash('categories/Primavera-Juvenil');
			$anchorScroll();
		}
		/*FEMALE*/
		$scope.gotoSpringF=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=false;
			//
			$scope.showSpringYouth=false;
			$scope.showAutumnYouth=false;
			//
			$scope.showSpringFemale2=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale=true;
			$location.hash('categories/Primavera-Femenino');
			$anchorScroll();
		}
		$scope.gotoAutumnF=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=false;
			//
			$scope.showSpringYouth=false;
			$scope.showAutumnYouth=false;
			//
			$scope.showSpringFemale2=false;
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=true;
			$location.hash('categories/Otoño-Femenino');
			$anchorScroll();
		}
		$scope.gotoSpringF2=function(){
			$scope.showArdillas=false;
			$scope.showCastores=false;
			$scope.showZorros=false;
			//
			$scope.showRabbits=false;
			$scope.showHornets=false;
			$scope.showIrons=false;
			$scope.showFalcons=false;
			$scope.showTauros=false;
			$scope.showPonys=false;
			//
			$scope.showSpringYouth=false;
			$scope.showAutumnYouth=false;
			//
			$scope.showSpringFemale=false;
			$scope.showAutumnFemale=false;
			$scope.showSpringFemale2=true;
			$location.hash('categories/Primavera-Femenino2');
			$anchorScroll();
		}

		//---------------------------------------------------------------------------------------------	

		/*GALLERY*/
 		// Set of Photos--------------------------------------------------------------------------------
		$scope.photos = [
			{src: 'images/evento1.jpg', desc: 'Image 01'},
			{src: 'images/Entrenamiento 1.jpg', desc: 'Image 02'},
			{src: 'images/Entrenamiento 2.jpg', desc: 'Image 03'},
			{src: 'images/Entrenamiento 3.jpg', desc: 'Image 04'},
			{src: 'images/Entrenamiento 4.jpg', desc: 'Image 05'},
			{src: 'images/Entrenamiento 5.jpg', desc: 'Image 06'},
			{src: 'images/Gimnasio 2.jpg', desc: 'Image 07'},
			{src: 'images/Gimnasio 6.jpg', desc: 'Image 08'},
			{src: 'images/marcador.jpg', desc: 'Image 09'},
			{src: 'images/Palcos 1.jpg', desc: 'Image 10'},
			{src: 'images/Tribunas Local 1.jpg', desc: 'Image 11'},
			{src: 'images/Tribunas Visitantes 1.jpg', desc: 'Image 12'},
			{src: 'images/Vestidor 5.jpg', desc: 'Image 13'},
			{src: 'images/Áreas Ent 3.jpg', desc: 'Image 14'}
		];
		// initial image index
		$scope._Index = 0;
		// if a current image is the same as requested image
		$scope.isActive = function (index) {
			return $scope._Index === index;
		};
		// show prev image
		$scope.showPrev = function () {
			$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
		};
		// show next image
		$scope.showNext = function () {
			$scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
		};
		// show a certain image
		$scope.showPhoto = function (index) {
			$scope._Index = index;
		};
		//-----------------------------------------------------------------------------------------------
		/*************JOIN TO US*********************/
		/*REGISTER*/
		this.birthDate= new Date();
		//show/Hide Register Form----------------------------------------------------------------------
 		$scope.registerVisibility=false;
 		$scope.formHide1=false;
 		$scope.formHide2=true;
 		$scope.formHide3=true;
 		$scope.formHide4=true;

 		$scope.formShow1=false;
 		$scope.formShow2=false;
 		$scope.formShow3=false;
 		$scope.formShow4=false;

 		$scope.showRegister=function(){
 			$scope.registerVisibility=true;
 		}

 		$scope.showForm1=function(){
 			$scope.formShow2=false;
 			$scope.formHide2=true;
 			$scope.formHide1=false;
 			$scope.formShow1=true;
 		}

 		$scope.showForm2=function(){
 			$scope.formHide1=true;
 			$scope.formShoe1=false;
 			$scope.formHide2=false;
 			$scope.formShow2=true;
 			$scope.formHide3=true;
 			$scope.formShow3=false;
 		}

 		$scope.showForm3=function(){
 			$scope.formShow2=false;
 			$scope.formHide2=true;
 			$scope.formHide3=false;
 			$scope.formShow3=true;
 			$scope.formHide4=true;
 			$scope.formShow4=false;
 		}

 		$scope.showForm4=function(){
 			$scope.formHide3=true;
 			$scope.formShow3=false;
 			$scope.formShow4=true;
 			$scope.formHide4=false;
 		}
 		//---------------------------------------------------------------------------------------------------

 		//clear and close register ------------------------------------------------------------------
 		$scope.ClearRegister=function(){
 			$scope.info="";
 			$scope.registerVisibility=false;
 			$scope.formHide1=false;
	 		$scope.formHide2=true;
	 		$scope.formHide3=true;
	 		$scope.formHide4=true;

	 		$scope.formShow1=true;
	 		$scope.formShow2=false;
	 		$scope.formShow3=false;
	 		$scope.formShow4=false;
 			$scope.register.$setUntouched();
 		}
 		//---------------------------------------------------------------------------------------------


 		//Send Register Section-----------------------------------------------------
		$scope.result = 'hidden'
  		$scope.resultMessage1; 
    	$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    	$scope.send = function(info) {
    		//alert('Form submitted with' + JSON.stringify(info));
        	$scope.submitted = true;
        	//if (contactform.$valid) {
            	$http({
               		method  : 'POST',
                	url     : 'register-form.php',
                	data    : info,  //param method from jQuery
                	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload
            	}).success(function(data){
                	console.log(info);
                	if(data.success){
	                    $scope.resultMessage1 = data.message;
                    	alert($scope.resultMessage1);
	                }
                	else{
	                	$scope.resultMessage1 = data.message;
                    	alert($scope.resultMessage1	);	
	                }
            	});
    	}//---------------------------------------------------------------------


 		//Contact section-------------------------------------------------------
		$scope.result = 'hidden'
  		$scope.resultMessage;
    	//$scope.input; //formData is an object holding the name, email, subject, and message
    	$scope.submitButtonDisabled = false;
    	$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    	$scope.submit = function(input) {
    		//alert('Form submitted with' + JSON.stringify(input));
        	$scope.submitted = true;
        	$scope.submitButtonDisabled = true;
        	//if (contactform.$valid) {
            	$http({
               		method  : 'POST',
                	url     : 'contact-form.php',
                	data    : input,  //param method from jQuery
                	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload
            	}).success(function(data){
                	console.log(data);
                	if (data.success) { //success comes from the return json object
                    	$scope.submitButtonDisabled = true;
                    	$scope.resultMessage = data.message;
                    	alert($scope.resultMessage);
                    	//$scope.result='bg-success';
                	} else {
                    	$scope.submitButtonDisabled = false;
                    	$scope.resultMessage = data.message;
                    	alert($scope.resultMessage);
                    	//$scope.result='bg-danger';
                	}
            	});
        	/*} else {
            	$scope.submitButtonDisabled = false;
            	$scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            	$scope.result='bg-danger';
        	}*/
    	}//---------------------------------------------------------------------


      	/*-------------------------------INSTRUCCIONES------------------------------------------------*/

      	$scope.showInstru = function(ev) {
	        $mdDialog.show({
	            controller: DialogController,
	            templateUrl: 'html/system/instrucciones.html',
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
      /*---------------------------------------------------------------------------------------------*/
       /*---------------------------------Entrenamiento----------------------------------------*/
       $scope.showEntre = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/system/Entrenamiento.html',
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

      /*-------------------------------Field of plat and training--------------------------------*/
      	 $scope.showPlay = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/system/play-training.html',
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

      /*--------------------------------OFFICCE---------------------------------------------------*/

       $scope.showOffi = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/system/Office.html',
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

      /*------------------------------Medical service--------------------------------------------*/

      $scope.showSer = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'html/system/MedicalService.html',
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
      			templateUrl: 'html/system/Gimnasio.html',
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
      			templateUrl: 'html/system/Palcos.html',
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

   	/*-------------------------BUILDING AND BATHROOM----------------------------------------------*/

   		$scope.showBB = function(ev) {
    		$mdDialog.show({
      			controller: DialogController,
      			templateUrl: 'html/system/Buildings.html',
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
   	/*-------------------------------------------------------------------------------------------*/

      /*---------------------------------TERMINOS Y CONDICIONES----------------------------------*/
    	$scope.showAdvanced = function(ev) {
    		$mdDialog.show({
      			controller: DialogController,
      			templateUrl: 'html/system/TerminosCondiciones.html',
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


		/*--------------ADDRESS SECTION---------------------------------------------------*/
    	getEstado($http,$scope);

    	$scope.ShowMunicipio = function() { 
    		ClearMunColCP($scope);
    		getMunicipio($http,$scope,$scope.info)
      	};
      	$scope.ShowColonia = function() { 
      		ClearColCP($scope);
    		getColonia($http,$scope,$scope.info)
      	};
      	$scope.ShowCP = function() {
      		ClearCP($scope);
    		getCP($http,$scope,$scope.info)
      	};

	});
/*********************aquí terminaba*****/
function getEstado($http,$scope){
	$http({
		method 	: 'POST',
		url 	: 'estados.php'
	}).then(function(response) {
 		$scope.Estados = response.data;
    });
}

function getMunicipio($http,$scope,Estado){
	//alert('Variable enviada:' + JSON.stringify(Estado));
	$http({
		method  : 'POST',
		url 	: 'estados.php',
		data    : Estado
	}).then(function(response) {
			$scope.Municipios = response.data;
	});
}

function getColonia($http,$scope,Colonia){
	//alert('Variable enviada:' + JSON.stringify(Colonia));
	$http({
		method  : 'POST',
		url 	: 'estados.php',
		data    : Colonia
	}).then(function(response) {
			$scope.Colonias = response.data;
	});
}

function getCP($http,$scope,CP){
	//alert('Variable enviada:' + JSON.stringify(CP));
	$http({
		method  : 'POST',
		url 	: 'estados.php',
		data    : CP
	}).then(function(response) {
			$scope.CPs = response.data;
			//lert('Variable enviada:' + JSON.stringify(response));
	});
}

function ClearMunColCP($scope){
	$scope.info.Municipio='';
	$scope.info.Colonia='';
	$scope.info.CP='';
}
function ClearColCP($scope){
	$scope.info.Colonia='';
	$scope.info.CP='';
}
function ClearCP($scope){
	$scope.info.CP='';
}
})();
//-----------------------------------------------------------------------------------------------------------------
