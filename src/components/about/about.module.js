'use strict';

import styles from './about.style.css';

// import aboutService from './about.service.js';
// SERVICE

class aboutService {
    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }
    getData(URL) {
        return this.$http.get(URL);
    }
}

// import aboutPage from './about.component.js';
// COMPONENT

const aboutPage = {
    template: require('./about.template.html'),
    controller: class aboutController {
        static $inject = ['aboutService'];
        constructor(aboutService) {
            this.aboutService = aboutService;
        }

        $oninit() {
            const urlRef = './data/about/about.json';
            document.title = "About // Elliot Evans";
            console.log('INIT');

            this
                .aboutService.getData(urlRef)
                .then((response) => {
                    console.log('RES:', response);

                    for (var responseImages = 0; responseImages < response.data.language.length; responseImages++) {
                        response.data.language[responseImages].image = require(`${response.data.language[responseImages].image}`);
                    }

                    for (var responseImages = 0; responseImages < response.data.framework.length; responseImages++) {
                        response.data.framework[responseImages].image = require(`${response.data.framework[responseImages].image}`);
                    }

                    let _pageHeading = response.data.pageHeading;
                    let _pageSubHeading = response.data.pageSubHeading;
                    let _languages = response.data.language;
                    let _frameworks = response.data.framework;

                    this.pageHeading = _pageHeading;
                    this.pageSubHeading = _pageSubHeading;  
                    this.languages = _languages;
                    this.frameworks = _frameworks;

                    // renderToPage(_pageHeading, _pageSubHeading, _languages, _frameworks);

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

                // function renderToPage (_pageHeading, _pageSubHeading, _languages, _frameworks, $scope) {
                //     this.pageHeading = _pageHeading;
                //     this.pageSubHeading = _pageSubHeading;  
                //     this.languages = _languages;
                //     this.frameworks = _frameworks;
                // }
        }
    }

}

angular
    .module('app')
    .service('aboutService', aboutService)
    .component('aboutPage', aboutPage);
