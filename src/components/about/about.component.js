'use strict';

// IMPORT
import styles from './about.style.css';

let app = angular.module('app');

app.component('aboutPage', {

    // TEMPLATE
    template: require('./about.template.html'),

    // CONTROLLER
    controller: function () {
        document.title = "About // Elliot Evans";
    }
})