'use strict';

let app = angular.module('app');

app.service('aboutService', function aboutService ($http) {

    (function getAboutHeadingText() {
        $http({
            method: 'GET',
            url: './data/about/aboutTitle.json'
        }).then(function successCallback(response) {
            console.log('test',response);
            return response;    
        }, function errorCallback(response, status) {
            console.log('test2',response);
            response.data.error = {
                status: status,
                statusMessage: statusText,
                error: "unable to find text"
            };
            return response;
        });
    })();

    //ASSIGN
    // this._pageHeading = response.data.pageHeading;
    // this._pageSubHeading = response.data.pageSubHeading;
    // this._errorJSON = response.data.error;

    this._pageHeading = "test";
});

