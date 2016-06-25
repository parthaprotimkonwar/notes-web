/*A Controller controlles a small unit of the modules.*/

myApp.controller('myController', ['$scope', '$http', 'commonServices','CONSTANTS', function ($scope, $http, commonServices,CONSTANTS) {

    /*$http.get('js/data.json').success(function (data) {
        $scope.authors = data;
    });*/

    //setting a default value to the select box
    $scope.peopleOrder = "name";

    //Get all SUBJECTS
    $scope.getSubjectPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/get/subjects",CONSTANTS.GET_METHOD,null);
    $scope.getSubjectPromise.success(function (data, status, headers, config) {
        console.log('Got back a response');
        console.log(data);
        $scope.subjectList = data.data;
    }).error(function (data, status, headers, config) {
        console.log('AWS DOWN');
    });


    $scope.getChapters = function() {
        //Get all CHAPTERS
        $scope.getChaptersPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/get/chapters/"+$scope.subject_id,CONSTANTS.GET_METHOD,null);
        $scope.getChaptersPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.chapterList = data.data;
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
        });
    }

    $scope.getQuestionAnswers = function() {

        //Get all QuestionAnswers
        $scope.getQAPromise = commonServices.sendHttpRequest("http://localhost:9000/admin/get/qa/"+$scope.chapter_id,CONSTANTS.GET_METHOD,null);
        $scope.getQAPromise.success(function (data, status, headers, config) {
            console.log('Got back a response');
            console.log(data);
            $scope.questionAnswerList = data.data;
        }).error(function (data, status, headers, config) {
            console.log('AWS DOWN');
        });
    }
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
