var app = angular.module('angularclearinputcontrols', ['ngMessages']);
app.controller('ClearInputControlsController', function ($scope, $window) {

    $scope.SubmitForm = function () {

        if ($scope.formvalidation.$valid) {
            $scope.submitted = false;
            alert("Submitted!!");
        }
        else {
            //if $scope.formvalidation.$valid is not true then it submitted= true i.e., the submitted attribute should work
            $scope.submitted = true;
        }

    }
    $scope.ClearDataInInputControls = function () {
        $scope.FormInfo = {};
    }
    $scope.ClearByReload = function () {
        $window.location.reload();

    }
    $scope.ClearByReset = function () {
        $scope.formvalidation.$setPristine();  // it sets the form to pristine
        $scope.formvalidation.$setUntouched(); // it sets the form to untouched
        // $scope.formvalidation.$submitted = false;  // we can use this in place of $scope.submitted
        $scope.submitted = false;
        $scope.FormInfo = {}; // Clear the ng-model object that holds the ng-model value
    }
});