var app = angular.module('app', []);

app.component('headerContainer', {
    // isolated scope binding
    bindings: {
        menu: '<',
        icon: '<'
    },
    // Template to generate html markup
    template: require('header__index.html'),
    // The controller that handles our component logic
    controller: function () {
        this.menu = [
            {
                name: "Home",
                component: "home"
            }, 
            {
                name: "About",
                component: "about"
            },  
            {
                name: "Contact",
                component: "contact"
            }
        ];
    }
});
