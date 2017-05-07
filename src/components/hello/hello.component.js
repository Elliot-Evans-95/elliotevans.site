// 'use strict';

// const helloPage = {
//     template: require('./hello.template.html'),
//     controller: class helloController {
//         static $inject = ['$scope', 'helloService'];
//         constructor($scope, helloService) {
//             this.$scope = $scope;
//             this.helloService = helloService;
//         }

//         $onInit() {
//             const urlRef = './data/hello/hello.json';
//             document.title = "About // Elliot Evans";
//             console.log('INIT');
//             this
//                 .helloService.getData(urlRef)
//                 .then((response) => {
//                     console.log('RES:', response);

//                     let _heading = response.data.heading;
//                     let _subHeading = response.data.subHeading;
//                     let _shortDescription = response.data.shortDescription;
//                     let _longDescription = response.data.longDescription;
//                     let _personalImage = response.data.personalImage;
//                     let _personalImageText = response.data.personalImageText;
//                     let _personalImageAlt = response.data.personalImageAlt;

//                     this.heading = _heading;
//                     this.subHeading = _subHeading;  
//                     this.shortDescription = _shortDescription;
//                     this.longDescription = _longDescription;
//                     this.personalImage = require(`${_personalImage}`);
//                     this.personalImageText = _personalImageText;
//                     this.personalImageAlt = _personalImageAlt;

//                 }, function(response, status, $log) {
//                     let errorResponse = class errorResponse {
//                         constructor() {
//                             this.status = response.status;
//                             this.statusMessage = response.statusText;
//                             this.customError = "unable to find text";
//                             this.dataError = response.data;
//                         }
//                     };
//                     let _errorJSON = new errorResponse;
//                     $log.error(_errorJSON.toString());

//                 });
                
//         }

//     }
// }
