var App = angular.module('App', []);

App.config(['$routeProvider', function($routeProvider)
{  
	$routeProvider.     
	when('/Add', 
	{	
templateUrl: 'Add.html',	
controller: 'AddController'
	}).     
	when('/Show', {
templateUrl: 'Dashboard.html',	
controller: 'ShowOrdersController'
	}).     
	when('/Dbhk', {
templateUrl: 'DashboardHK.html',	
controller: 'DashboardHKController'
	}).     
	when('/ShowDetail/:date', {
templateUrl: 'Details.html',	
controller: 'DetailsController'
	})
	.otherwise({
redirectTo: '/Dbhk'
	});
}]);

App.directive("tempDirective", function()
{
	return{template:"<select><option id='option1' value='Green'>Green</option><option id='option2' value='Amber'>Amber</option><option id='option3' value='Red'>Red</option></select>"};
});

App.controller('TodoCtrl', function($scope, $http, $location) {
	$http.get('todos.json')
	.then(function(res){
		$scope.todos = res.data;             
	});		
	$scope.IsNav = $location.path() != '/Dbhk';
	$scope.options =  [{name:'Green', color:'option1'},{name:'Amber', color:'option2'},{name:'Red', color:'option3'}];
	$scope.myselect = 'Green';
});

App.controller('DetailsController', function($scope, $http, $routeParams) {
	$scope.date = $routeParams.date;
});

App.controller('AddController', function($scope) {	
	$scope.name = "Rahul";
	$scope.date = new Date(); 

});

App.controller('DashboardHKController', function($scope, $http) {
	$http.get('todos.json')
	.then(function(res){
		$scope.todos1 = res.data;            
	});
});
