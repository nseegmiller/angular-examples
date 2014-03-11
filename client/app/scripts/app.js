angular.module('routesAndPromises', ['ngRoute', 'ngResource'])
    .constant('APIDelay', 0)
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .otherwise({
                redirectTo:'/dashboard'
            });
    });