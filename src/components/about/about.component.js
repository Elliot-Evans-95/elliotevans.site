'use strict';

// IMPORT
import styles from './about.style.css';

let app = angular.module('app');

app.component('aboutPage', {

    // TEMPLATE
    template: require('./about.template.html'),

    // CONTROLLER
    controller: function ($scope, aboutService) {
        document.title = "About // Elliot Evans";

        // SCOPE ASSIGN
        $scope.pageHeading = aboutService._pageHeading;
        $scope.pageSubHeading = aboutService._pageSubHeading;
        $scope.error = aboutService._errorJSON;

    }
});