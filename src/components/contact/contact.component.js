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
        $scope.removeUserName();
        $scope.removeEmail();
        $scope.removeLocation();
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
}])