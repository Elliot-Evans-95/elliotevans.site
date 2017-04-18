'use strict';

let app = angular.module('app');

app.service('contactService', function contactService ($http) {
    this.getContact = getContact => {
        return $http({
            method: 'GET',
            url: './data/about/contact.json'
        });
    };
});
