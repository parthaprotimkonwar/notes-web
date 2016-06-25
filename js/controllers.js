/*
    A Module is a small part of the project.  
    Each module combines together to form an entire application.
    A module has a module name and initialized by ng-app in the html document
    
    var myApp = angular.module('myApp', []);
    Here myApp is the name of the namespace and [] contains the dependecy services which need to be injected in the module.
*/
var myApp = angular.module('myApp', []);

/*A Controller controlles a small unit of the modules.*/

myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
    
    /*$http.get('js/data.json').success(function (data) {
        $scope.authors = data;
    });*/
    
    //setting a default value to the select box
    $scope.peopleOrder = "name";
    //static data
   /* $scope.authors = [
        {
            'name' : 'partha1',
            'occupation' : 'engineer',
            'company' : 'oracle'
        },
        {
            'name' : 'partha_first2',
            'occupation' : 'engineer_first',
            'company' : 'oracle_first'
        },
        {
            'name' : 'partha_second3',
            'occupation' : 'engineer_second',
            'company' : 'oracle_second'
        }
    ];
	
	$scope.meraval = function() {
		return "partha protim konwar";
	};*/
	
}]);