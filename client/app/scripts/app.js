angular.module('routesAndPromises', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html'
            })
            .otherwise({
                redirectTo:'/dashboard'
            });
    });