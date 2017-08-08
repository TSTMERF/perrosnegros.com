//wrap the module
(function(){
	//start mean module
	angular.module('aboutModule',[])
	//defining mean directive
	.directive('aboutDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/home.html',
			controller: 'aboutController'
		};
	})
	.controller('aboutController', function($mdDialog){
		this.missionAction = function(ev) {
      		$mdDialog.show($mdDialog.alert()
        		.title('Misión')
        		.textContent('Fomentar la práctica del football americano y generar en los jóvenes un sentido de pertenencia, lealtad, responsabilidad y disciplina para la integración y trabajo en equipo en su vida personal y profesional.')
        		.ok('Ok')
        		.targetEvent(ev)
      		);
    	};
    	this.vissionAction = function(ev){
    		$mdDialog.show($mdDialog.alert()
    			.title('Visión')
        		.textContent('A partir de nuestros valores podemos contribuir a un crecimiento social de personas altamente responsables y de gran calidad humana que puedan traducir su esfuerzo y dedicación en una oportunidad para lograr sus metas.')
        		.ok('Ok')
        		.targetEvent(ev)
    		);
    	};
    	this.valuesAction = function(ev){
    		$mdDialog.show($mdDialog.alert()
    			.title('Valores')
        		.textContent('Nuestros deportistas se guiarán y aprenderán el valor de la perseverancia, unidad, disciplina, lealtad, responsabilidad, honradez y disciplina.')
        		.ok('Ok')
        		.targetEvent(ev)
    		);
    	}; 
	});
})();