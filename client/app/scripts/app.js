angular.module('angular-examples', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when('/other-page', {
                templateUrl: 'views/other-page.html'
            })
            .otherwise({
                redirectTo:'/dashboard'
            });
    });