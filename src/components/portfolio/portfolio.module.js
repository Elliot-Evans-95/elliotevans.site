'use strict';

// STYLE
import styles from './portfolio.style.css';

// import portfolioService from './portfolio.service.js';
// SERVICE

class portfolioService {
    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }
    getData(URL) {
        return this.$http.get(URL);
    }
};

// import portfolioPage from './portfolio.component.js';
// COMPONENT

const portfolioPage = {
    template: require('./portfolio.template.html'),
    controller: class portfolioController {
        static $inject = ['portfolioService'];
        constructor(portfolioService) {
            this.portfolioService = portfolioService;
        }
        $onInit() {
            const urlRef = './data/portfolio/portfolio.json';
            document.title = "Portfolio // Elliot Evans";

            this
                .portfolioService.getData(urlRef)
                .then((response) => {
                    console.log('response', response);

                    for (var responseImages = 0; responseImages < response.data.portfolio.length; responseImages++) {
                        response.data.portfolio[responseImages].mainImage = require(`${response.data.portfolio[responseImages].mainImage}`);
                    }

                    let _heading = response.data.heading;
                    let _subHeading = response.data.subHeading;
                    let _portfolios = response.data.portfolio;

                    this.heading = _heading;
                    this.subHeading = _subHeading;
                    this.portfolios = _portfolios;

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
    .service('portfolioService', portfolioService)
    .component('portfolioPage', portfolioPage);
