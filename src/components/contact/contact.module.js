'use strict';

import styles from './contact.style.css';

// import contactService from './contact.service.js';
// SERVICE

class contactService {
    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }
    getData(URL) {
        return this.$http.get(URL);
    }
};

// import contactPage from './contact.component.js';
// COMPONENT

const contactPage = {
    template: require('./contact.template.html'),
    controller: class contactController {
        static $inject = ['contactService'];
        constructor(contactService) {
            this.contactService = contactService;
        };

        $onInit() {
            const urlRef = './data/contact/contact.json';
            document.title = "Contact // Elliot Evans";
            console.log('INIT');

            this
                .contactService.getData(urlRef)
                .then((response) => {
                    console.log('RES:', response);

                    let _heading = response.data.heading;
                    let _name = response.data.name;
                    let _email = response.data.email;
                    let _emailType = response.data.emailType;
                    let _location = response.data.location;
                    let _message = response.data.message;

                    this.heading = _heading;
                    this.name = _name;
                    this.email = _email;
                    this.emailType = _emailType;
                    this.location = _location;
                    this.message = _message;

                }, function(response, status, $log) {
                    class errorResponse {
                        constructor() {
                            this.status = response.status;
                            this.statusMessage = response.statusText;
                            this.customError = "unable to find text";
                            this.dataError = response.data;
                        }
                    };
                    let _errorJSON = new errorResponse;
                    $log.error(_errorJSON.toString());
                });
        };
    }
};

angular
    .module('app')
    .service('contactService', contactService)
    .component('contactPage', contactPage);
