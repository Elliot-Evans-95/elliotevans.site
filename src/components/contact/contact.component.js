'use strict';

// IMPORT
import styles from './contact.style.css';

let app = angular.module('app');

app.component('contactPage', {

    // BINDINGS
    bindings: {
      user: '='
    },

    // TEMPLATE
    template: require('./contact.template.html'),
})

.controller('contactController', ['$scope', ($scope, $invalid) => {
    document.title = "Contact // Elliot Evans";

    $scope.form = { };

    $scope.formProgress

    $scope.save = (user) => {
        $scope.form = angular.copy(user);
    };

    $scope.reset = () => {
        $scope.user = { };
        $scope.removeUserName();
        $scope.removeEmail();
        $scope.removeLocation();
    };

    $scope.removeUserName = () => {
        $scope.user.name = null;
    };

    $scope.removeEmail = () => {
        $scope.user.email = null;
    };

    $scope.removeLocation = () => {
        $scope.user.location = null;
    };
}])