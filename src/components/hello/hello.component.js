'use strict';

// IMPORT
import styles from './hello.style.css';

let app = angular.module('app');

app.component('helloPage', {

    // TEMPLATE
    template: require('./hello.template.html'),

    // CONTROLLER
    controller: () => {
        document.title = "Elliot Evans";
    }
  }
)
