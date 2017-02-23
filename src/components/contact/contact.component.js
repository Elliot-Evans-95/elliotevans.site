'use strict';

// IMPORT
import styles from './contact.style.css';

let app = angular.module('app');

app.component('contactPage', {

    // BINDINGS
    bindings: {
      user: '=',
      currentProgress: '='
    },

    // TEMPLATE
    template: require('./contact.template.html'),
})

.controller('contactController', ['$scope', function($scope, $invalid) {
    document.title = "Contact // Elliot Evans";

    $scope.form = { };

    $scope.formProgress

    $scope.save = function(user) {
        $scope.form = angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = { };
    };

    $scope.removeUserName = function() {
        $scope.user.name = null;
    };

    $scope.removeEmail = function() {
        $scope.user.email = null;
    };

    $scope.removeLocation = function() {
        $scope.user.location = null;
    };

    $scope.reset();

    // Add a reset for only this input element

    // Add a currentProgress for form
        // Thinking once the form is valid it will add a value onto progress. 

    $scope.$watch(contactForm.userName, function() {
        alert("hello")
    });
}])