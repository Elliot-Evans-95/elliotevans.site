'use strict';

// IMPORT
import styles from './portfolio.style.css';

let app = angular.module('app');

app.component('portfolioPage', {

    // TEMPLATE
    template: require('./portfolio.template.html'),

    // CONTROLLER
    controller: () => {
        document.title = "Portfolio // Elliot Evans";
    }

})