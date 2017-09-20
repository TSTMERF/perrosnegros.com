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
		//definiendo liga de login
		$scope.login = function(){
			$location.path('/login/');	
			
		}
		$scope.signIn=function(){
			$location.path('/signIn/');
		}
		$scope.gotoAbout = function(){
			$location.path('/about/');
			$window.scrollTo(0,0);
		}
		$scope.gotoEvent = function(){
			$location.path('/event/');
			$window.scrollTo(0,0);
		}
		$scope.gotoTop = function(){
			$location.path('/');
		}
		$scope.gotoNoticePrivacy = function() {
			$location.path('/privacy/');	
			$window.scrollTo(0,0);
		}
		$scope.gotoContact = function() {
			$location.path('/contact/');
			$window.scrollTo(0,0);
		}
		$scope.gotoCategory=function(){
			$location.path('/categories/');
			$window.scrollTo(0,0);
		}
		$scope.gotoFacilities=function(){
			$location.path('/facilities/');
			$window.scrollTo(0,0);
		}
		
		/*GALLERY*/
 		// Set of Photos--------------------------------------------------------------------------------
		$scope.photos = [
			{src: 'images/eventos/evento1.jpg', desc: 'Image 01'},
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
