'use strict';

// IMPORT
import styles from './about.style.css';

let app = angular.module('app');

app.component('aboutPage', {

    // TEMPLATE
    template: require('./about.template.html'),

    // CONTROLLER
    controller: ($scope, jsonService) => {
        let urlRef = './data/about/about.json';
        document.title = "About // Elliot Evans";

        jsonService
            .getData(urlRef)
            .then((response) => {
                console.log('response', response);

                for (var responseImages = 0; responseImages < response.data.language.length; responseImages++) {
                    response.data.language[responseImages].image = require(`${response.data.language[responseImages].image}`);
                }

                for (var responseImages = 0; responseImages < response.data.framework.length; responseImages++) {
                    response.data.framework[responseImages].image = require(`${response.data.framework[responseImages].image}`);
                }

                let _pageHeading = response.data.pageHeading;
                let _pageSubHeading = response.data.pageSubHeading;
                let _languages = response.data.language;
                let _frameworks = response.data.framework;

                $scope.pageHeading = _pageHeading;
                $scope.pageSubHeading = _pageSubHeading;  
                $scope.languages = _languages;
                $scope.frameworks = _frameworks;

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