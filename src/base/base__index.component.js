'use strict';
var app =  angular.module('app', []);

//
app.component('base', {
  // Binds the attibute data to the component controller.
  bindings: {
    data: '@'
  },

  // We can now access the data from the data attribute with `$ctrl`
  template: require('./base__index.html')
});