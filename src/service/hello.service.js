'use strict';

let app = angular.module('app');

app.service('helloService', function helloService ($http) {
    this.getHello = getAboutHeadingText => {
        return $http({
            method: 'GET',
            url: './data/hello/hello.json'
        });
    };
});
