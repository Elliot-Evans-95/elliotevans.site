'use strict';

let app = angular.module('app', ['ui.router', 'ngAnimate', 'oc.lazyLoad']);

app.config(function($stateProvider, $locationProvider, $ocLazyLoadProvider) {

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
    resolve: {
        lazyLoad: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
          let deferred = $q.defer();
          require.ensure([], function () {
            let about = require('./components/about/about.component.js');
            // Should be load to load in the component but its not working
            // $ocLazyLoad.load({
            $ocLazyLoad.inject({
              name: about.default
            });
            deferred.resolve(about);
          });
          return deferred.promise;
        }]
      }
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