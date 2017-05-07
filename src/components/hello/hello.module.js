'use strict';

import styles from './hello.style.css';

// import helloService from './hello.service.js';
// SERVICE

class helloService {
    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }
    getData(URL) {
        return this.$http.get(URL);
    }
}

// import helloPage from 'components/hello/hello.component.js';
// COMPONENT

const helloPage = {
    template: require('./hello.template.html'),
    controller: class helloController {
        static $inject = ['helloService'];
        constructor(helloService) {
            this.helloService = helloService;
        }

        $onInit() {
            const urlRef = './data/hello/hello.json';
            document.title = "About // Elliot Evans";
            console.log('INIT');
            this
                .helloService.getData(urlRef)
                .then((response) => {
                    console.log('RES:', response);

                    let _heading = response.data.heading;
                    let _subHeading = response.data.subHeading;
                    let _shortDescription = response.data.shortDescription;
                    let _longDescription = response.data.longDescription;
                    let _personalImage = response.data.personalImage;
                    let _personalImageText = response.data.personalImageText;
                    let _personalImageAlt = response.data.personalImageAlt;

                    this.heading = _heading;
                    this.subHeading = _subHeading;  
                    this.shortDescription = _shortDescription;
                    this.longDescription = _longDescription;
                    this.personalImage = require(`${_personalImage}`);
                    this.personalImageText = _personalImageText;
                    this.personalImageAlt = _personalImageAlt;

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
                
        }

    }
}

angular
    .module('app')
    .service('helloService', helloService)
    .component('helloPage', helloPage);
