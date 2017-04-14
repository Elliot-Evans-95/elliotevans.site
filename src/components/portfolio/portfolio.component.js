'use strict';

// IMPORT
import styles from './portfolio.style.css';

let app = angular.module('app');

app.component('portfolioPage', {

    // TEMPLATE
    template: require('./portfolio.template.html'),

    // CONTROLLER
    controller: ($scope, portflioService) => {
        document.title = "Portfolio // Elliot Evans";

        portflioService
            .getHello()
            .then((response) => {
                console.log('response', response);

                let _heading = response.data.heading;
                let _subHeading = response.data.subHeading;

                $scope.heading = _heading;
                $scope.subHeading = _subHeading;

            }, (response, status, $log) => {

                response.data.error = {
                    status: status,
                    statusMessage: statusText,
                    customError: "unable to find text",
                    dataError: data
                };

                let _errorJSON = response.data.error;
                $log.error(_errorJSON.toString());
            });
    }
});