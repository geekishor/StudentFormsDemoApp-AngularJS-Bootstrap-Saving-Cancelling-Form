studentFormsApp.controller("homeController", 
    function ($scope, $location) {
        $scope.addNewStudent = function () {
            $location.path('/newStudentForm');
        };
    })