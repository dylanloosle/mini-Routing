var app = angular.module('mini-routing', ['ngRoute']);

app.config(['$routeProvider', function(router){
    router
        .when('/', {
            templateUrl: '/Javascript/mini-Routing/js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/settings', {
            templateUrl: '/Javascript/mini-Routing/js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .when('/products/:id', {
            templateUrl: '/Javascript/mini-Routing/js/products/productTmpl.html',
            controller: 'productsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })


}]);