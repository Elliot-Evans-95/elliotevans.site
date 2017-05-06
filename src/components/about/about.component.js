'use strict';

import styles from './about.style.css';

let app = angular.module('app');

app.component('aboutPage', {

    template: require('./about.template.html'),

    controller: ['$scope', '$log', 'jsonService', (jsonService) => {
        let urlRef = './data/about/about.json';

        document.title = "About // Elliot Evans";

        jsonService
            .getData(urlRef)
            .then(response => {
                console.log('response', response);

                for (var responseImages = 0; responseImages < response.data.language.length; responseImages++) {
                    response.data.language[responseImages].image = require(`${response.data.language[responseImages].image}`);
                }

                for (var responseImages = 0; responseImages < response.data.framework.length; responseImages++) {
                    response.data.framework[responseImages].image = require(`${response.data.framework[responseImages].image}`);
                }

                self.pageHeading = response.data.pageHeading;
                let _pageSubHeading = response.data.pageSubHeading;
                let _languages = response.data.language;
                let _frameworks = response.data.framework;

                renderToPage(_pageHeading, _pageSubHeading, _languages, _frameworks);

            }, function(response, status, $log) {

                let errorResponse = class errorResponse {
                    constructor(height, width) {
                        this.status = response.status;
                        this.statusMessage = response.statusText;
                        this.customError = "unable to find text";
                        this.dataError = response.data;
                    }
                };

                let _errorJSON = new errorResponse;
                $log.error(_errorJSON.toString());
            });

            function renderToPage (_pageHeading, _pageSubHeading, _languages, _frameworks, $scope) {
                $scope.pageHeading = _pageHeading;
                $scope.pageSubHeading = _pageSubHeading;  
                $scope.languages = _languages;
                $scope.frameworks = _frameworks;
            }     
    }]
});