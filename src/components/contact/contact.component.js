'use strict';

// IMPORT
import styles from './contact.style.css';

let app = angular.module('app');

app.component('contactPage', {

    // TEMPLATE
    template: require('./contact.template.html'),

    // CONTROLLER
    controller: function () {
        document.title = "Contact // Elliot Evans";
    }

})