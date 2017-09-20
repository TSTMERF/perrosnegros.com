//wrap the module
(function(){
    //start mean module
    angular.module('contactModule',[])
    //defining mean directive
    .directive('contactDirective',function(){
        //return function
        return{
            restrict:'E',
            replace:true,
            templateUrl:'html/system/contact.html',
            controller: 'contactController'
        };
    })
    /*CONTROLLER*/
    .controller('contactController', function($route,$window,$scope,$location,$anchorScroll,$http,$mdDialog, $interval){
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
    });
})();