(function(){
	var app = angular.module('appgatito',['ui.router']);
	//Configuracion de las 
	// app.config(function($routeProvider,$locationProvider){
	// 	$routeProvider
	// 	.when("/",
	// 			{
	// 				controller:'miControlador',
	// 				templateUrl:"view/home.html"
	// 			}
	// 		)
	// 		.when("/gato",
	// 			{
	// 				controller:'miControlador',
	// 				templateUrl:"view/gato.html"
	// 			}
	// 		)
	// 		.when("/perro",
	// 			{
	// 				controller:'miControlador',
	// 				templateUrl:"view/gato.html"
	// 			}
	// 		);
	// 	$locationProvider.html5Mode(true);
	// });
	app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('menu',{
				url:'/',
				templateUrl:'view/home.html'
			})
			.state('menu.detail',{
				url:'{MenuAnimal}',
				templateUrl:function(urlattr){
						return 'view/'+ urlattr.MenuAnimal + '.html';
					}
				});
		
		$locationProvider.html5Mode(true);
	});
	app.controller('miControlador',['$scope',function($scope){
		$scope.numero = 50;

		$scope.Mascotas = [
			'perrito',
			'gatito',
			'periquito',
			'lagartija'
		];
		$scope.Animales = [
			{
				clase:'perro',
				name:'rico'
				},
			{
				clase:'gato',
				name:'paco'
				},
			{
				clase:'perico',
				name:'jose'
				},
			{
				clase:'cocodrilo',
				name:'pepe'
				}
			];

		$scope.mimascota = function(nombre){
			$scope.name = nombre;
		}
	}]);

	app.directive('listaAnimales',[function(){
		return{
			restrict:'E',
			templateUrl:'partials/lista-animales.html' 
		}
	}]);

	app.filter('capiTalize',[function(){
		return function(input){
			if(!input) return ""; 
			return input.charAt(0).toUpperCase() + input.slice(1);
		}
	}]);

})();