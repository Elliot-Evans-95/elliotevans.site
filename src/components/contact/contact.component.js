'use strict';

// IMPORT
import styles from './contact.style.css';

let app = angular.module('app');

app.component('contactPage', {

    // BINDINGS
    bindings: {
      user: '<'
    },

    // TEMPLATE
    template: require('./contact.template.html'),


    // CONTROLLER
    controller: ['$scope', '$log', 'jsonService', ($scope, jsonService) => {
        let urlRef = './data/contact/contact.json';
        document.title = "Contact // Elliot Evans";

        jsonService
            .getData(urlRef)
            .then((response) => {
                console.log('response', response);

                let _heading = response.data.heading;
                let _name = response.data.name;
                let _email = response.data.email;
                let _emailType = response.data.emailType;
                let _location = response.data.location;
                let _message = response.data.message;

                $scope.heading = _heading;
                $scope.name = _name;
                $scope.email = _email;
                $scope.emailType = _emailType;
                $scope.location = _location;
                $scope.message = _message;

            }, (response, status, $log) => {

                response.data.error = {
                    status: status,
                    statusMessage: statusText,
                    customError: "unable to find text",
                    dataError: data
                };

                let _errorJSON = response.data.error;
                $log.error(_errorJSON.toString());
            });

        let saveContactForm = function(contactDetails) {
            console.log(contactDetails);
            let request = new XMLHttpRequest();
            request.open('POST', '/', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(contactDetails);
        }

        $scope.form = { };
        $scope.user = { };
        $scope.save = (user) => {
            let _form = angular.copy(user);
            saveContactForm(_form);
        };
        $scope.reset = () => {
            $scope.user = { };
            $scope.removeUserName();
            $scope.removeEmail();
            $scope.removeLocation();
        };
        $scope.removeUserName = () => {
            $scope.user.name = null;
        };
        $scope.removeEmail = () => {
            $scope.user.email = null;
        };
        $scope.removeLocation = () => {
            $scope.user.location = null;
        };
    }]

});