'use strict';

let app = angular.module('app');

app.service('portfolioService', function portfolioService ($http) {
    this.getHello = getPortfolio => {
        return $http({
            method: 'GET',
            url: './data/hello/portfolio.json'
        });
    };
});
