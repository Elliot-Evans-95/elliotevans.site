'use strict';

// IMPORT
import styles from './contact.style.css';

let app = angular.module('app');

app.component('contactPage', {

    // BINDINGS
    bindings: {
      user:'='
    },

    // TEMPLATE
    template: require('./contact.template.html'),

    // CONTROLLER
    // controller: contactController
})

.controller('contactController', ['$scope', function($scope) {
    document.title = "Contact // Elliot Evans";

    $scope.form = { };

    $scope.save = function(user) {
        $scope.form = angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = { };
    };

    $scope.reset();
}]);