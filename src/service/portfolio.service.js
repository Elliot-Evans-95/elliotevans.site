'use strict';

let app = angular.module('app');

app.service('portfolioService', function portfolioService ($http) {
    this.getPortfolio = getPortfolio => {
        return $http({
            method: 'GET',
            url: './data/portfolio/portfolio.json'
        });
    };
});
