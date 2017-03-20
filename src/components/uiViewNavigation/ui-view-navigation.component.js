'use strict';

// IMPORT
import styles from './ui-view-navigation.style.css';

let app = angular.module('app');

app.component('viewNavigation', {

    // TEMPLATE
    template: require('./ui-view-navigation.template.html'),

    // CONTROLLER
    controller: function ($scope, $state) {
        console.log('State', $state)
        // let arrayViews = ['home' , 'about', 'portfolio', 'contract'];
        // let index = 0;
        $scope.forward = function() {
            // alert('forward');
            // if(index < arrayViews.length - 1) {
            //     index = index + 1
            //     $state.go(arrayViews[index]);
            // } else {
            // index = 0
            //     $state.go(arrayViews[index]);
            // }
            $state.go('home')
            console.log('State', $state)
        };
        $scope.backward = function() {
            alert('backward');
            if(index > 0) {
                index = index - 1;
                $state.go(arrayViews[index]);
            } else {
                index = arrayViews.length - 1;
                $state.go(arrayViews[index]);
            }
        }
    }

})