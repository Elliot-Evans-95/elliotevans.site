'use strict';

let app = angular.module('app');

app.service('aboutService', function aboutService ($http) {
    this.getAboutHeadingText = getAboutHeadingText => {
        return $http({
            method: 'GET',
            url: './data/about/about.json'
        });
    };
});
