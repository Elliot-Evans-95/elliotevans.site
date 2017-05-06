'use strict';

const helloPage = {
    // bindings: {
    //     applicant: '<'
    // },
    template: require('./hello.template.html'),
    controller: ['$scope', 'helloService', class helloController {
        constructor($scope, helloService) {
            const urlRef = './data/hello/hello.json';
            this.$scope = $scope;
            this.helloService = helloService;
        }

        $onInit() {
            console.log('INIT');
            this
                .helloService.getData(URLref)
                .then((response) => {
                    console.log('RES:', response);

                }, function(response, status, $log) {
                    let errorResponse = class errorResponse {
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

    }]
}


// export const helloPage = 'helloComponent';
// export const helloComponent = {
// 	template: require('./hello.template.html'),
// 	bindings: {
// 		hello : '>'
// 	},		
// 	controllerAs: 'helloCtrl',
// 	controller: 
// 	class helloController {
// 	    constructor($scope, jsonService) {
// 	      this.$scope = $scope;
// 	      this.jsonService = jsonService;
//           let urlRef = './data/hello/hello.json';
// 	    } 
  
// 	    $onInit() {
//             console.log('INIT');
//             this.title = this.jsonService.getData(urlRef);
// 	    }

// 	    static get $inject() {
// 	      return [
// 	        '$scope', 
// 	        'jsonService'    
// 	      ];
// 	    }
//   	}	
// };




// 'use strict';

// // IMPORT
// import styles from './hello.style.css';

// let app = angular.module('app');

// app.component('helloPage', {

//     // TEMPLATE
//     template: require('./hello.template.html'),

//     // CONTROLLER
//     controller: ($scope, jsonService) => {
//         let urlRef = './data/hello/hello.json';
//         document.title = "Elliot Evans";

//         console.log('SERVICE: ',jsonService);

//         this.$onInit = function () {

//             console.log('INIT: ',jsonService);

//             jsonService
//                 .getData(urlRef)
//                 .then((response) => {
//                     console.log('response', response);

//                     let _heading = response.data.heading;
//                     let _subHeading = response.data.subHeading;
//                     let _shortDescription = response.data.shortDescription;
//                     let _longDescription = response.data.longDescription;
//                     let _personalImage = response.data.personalImage;
//                     let _personalImageText = response.data.personalImageText;
//                     let _personalImageAlt = response.data.personalImageAlt;

//                     $scope.heading = _heading;
//                     $scope.subHeading = _subHeading;  
//                     $scope.shortDescription = _shortDescription;
//                     $scope.longDescription = _longDescription;
//                     $scope.personalImage = require(`${_personalImage}`);
//                     $scope.personalImageText = _personalImageText;
//                     $scope.personalImageAlt = _personalImageAlt;

//                 }, (response, status, $log) => {

//                     response.data.error = {
//                         status: status,
//                         statusMessage: statusText,
//                         customError: "unable to find text",
//                         dataError: data
//                     };

//                     let _errorJSON = response.data.error;
//                     $log.error(_errorJSON.toString());
//                 });
//         };
//     }
// });