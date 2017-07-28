studentFormsApp.controller('sfController',
    function sfController($scope, $window ,sfService) {
        $scope.student = sfService.student;

        $scope.updatedStudent = angular.copy($scope.student);

        $scope.departments = [
               "Math",
               "Physics",
               "Chemistry",
               "English"
        ];
        $scope.submitForm = function () {
            $scope.student = angular.copy($scope.updatedStudent);
            $window.history.back();
        }
        $scope.cancelForm = function () {
            $window.history.back();
        }
    });