(function(){
	var app = angular.module('ejemploAngular',['ui.route']);
	//Configuracion de las 
	app.config(function($stateProvider,$urlRouterProvider){

		$stateProvider.state('menu',{
			url:'/',
			templateUrl:'',
			controller:''
		});

	});

})();