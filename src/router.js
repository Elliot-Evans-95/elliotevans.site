'use strict';

let app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  // HELLO
  $stateProvider.state('hello', {
    url: '/hello',
    component: 'helloPage',
  });

  // ABOUT
  $stateProvider.state('about', {
    url: '/about',
    component: 'aboutPage',
  });

  // PORTFOLIO
  $stateProvider.state('portfolio', {
    url: '/portfolio',
    component: 'portfolioPage',
  });

  // CONTACT
  $stateProvider.state('contact', {
    url: '/contact',
    component: 'contactPage',
  });

});