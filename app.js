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

App.controller('TodoCtrl', function($scope, $http, $location) {
  $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;             
        });		
		 $scope.IsNav = $location.path() != '/Dbhk';		
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
          $scope.todos = res.data;            
        });
});
