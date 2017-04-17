'use strict';

// IMPORT
import styles from './portfolio.style.css';

let app = angular.module('app');

app.component('portfolioPage', {

    // TEMPLATE
    template: require('./portfolio.template.html'),

    // CONTROLLER
    controller: ($scope, portfolioService) => {
        document.title = "Portfolio // Elliot Evans";

        portfolioService
            .getPortfolio()
            .then((response) => {
                console.log('response', response);

                for (var responseImages = 0; responseImages < response.data.portfolio.length; responseImages++) {
                    response.data.portfolio[responseImages].mainImage = require(`${response.data.portfolio[responseImages].mainImage}`);
                }

                let _heading = response.data.heading;
                let _subHeading = response.data.subHeading;
                let _portfolios = response.data.portfolio;

                $scope.heading = _heading;
                $scope.subHeading = _subHeading;
                $scope.portfolios = _portfolios;

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