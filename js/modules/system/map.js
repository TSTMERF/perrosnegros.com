//wrap the module
(function(){
	//start mean module
	angular.module('mapModule',[])
	//defining mean directive
	.directive('mapDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/about.html',
			controller: 'mapController'
		};
	})
	/*CONTROLLER*/
	.controller('mapController',['$scope', function ($scope) {
		 var map = L.map('map').setView([19.488246, -99.243230], 19);
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);
			L.marker([19.488246, -99.243230]).addTo(map)
    		.bindPopup('Perros Negros Naucalpan')
    		.openPopup();
	}]);
})();