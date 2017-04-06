'use strict';

// IMPORT
import styles from './ui-view-navigation.style.css';

let app = angular.module('app');

app.component('viewNavigation', {

    // TEMPLATE
    template: require('./ui-view-navigation.template.html'),

    // CONTROLLER
    controller: function ($scope, $state) {
        var arrayViews=['hello', 'about', 'portfolio', 'contact'];
        var index=0;
        $scope.forward=function(){
            if(index<arrayViews.length-1){
                index=index+1
                $state.go(arrayViews[index]);
            }else{
            index=0
                $state.go(arrayViews[index]);
            }
        };
        $scope.backward=function(){
            if(index>0){
                index=index-1;
                $state.go(arrayViews[index]);
            }else{
                index=arrayViews.length-1;//
                $state.go(arrayViews[index]);
            }
        }
    }

})