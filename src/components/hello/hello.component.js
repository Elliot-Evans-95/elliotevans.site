'use strict';

// IMPORT
import styles from './hello.style.css';

let app = angular.module('app');

app.component('helloPage', {

    // TEMPLATE
    template: require('./hello.template.html'),

    // CONTROLLER
    controller: ($scope, jsonService) => {
        let urlRef = './data/hello/hello.json';
        document.title = "Elliot Evans";

        jsonService
            .getData(urlRef)
            .then((response) => {
                console.log('response', response);

                let _heading = response.data.heading;
                let _subHeading = response.data.subHeading;
                let _shortDescription = response.data.shortDescription;
                let _image = response.data.longDescription;
                let _personalImage = response.data.personalImage;
                let _personalImageText = response.data.personalImageText;
                let _personalImageAlt = response.data.personalImageAlt;

                $scope.heading = _heading;
                $scope.subHeading = _subHeading;  
                $scope.languages = _shortDescription;
                $scope.shortDescription = _image;
                $scope.personalImage = require(`${_personalImage}`);
                $scope.personalImageText = _personalImageText;
                $scope.personalImageAlt = _personalImageAlt;

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