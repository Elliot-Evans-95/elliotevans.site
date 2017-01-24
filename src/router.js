'use strict';
var app =  angular.module('app', ['ui.router']);

app.config(function($stateProvider) {
  var helloState = {
    name: 'index',
    url: '/index',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});