'use strict';

let app = angular.module('app');

app.service('jsonService', function jsonService ($http) {
    this.getData = function getData(jsonURL) {
        return $http({
            method: 'GET',
            url: jsonURL
        });
    };
});