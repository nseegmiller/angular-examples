angular.module('angular-examples', ['angular-examples.animations', 'ngRoute', 'ngAnimate'])
    .constant('TweenMax', TweenMax)
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .when('/other-page', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/other-page.html'
            })
            .otherwise({
                redirectTo:'/dashboard'
            });
    });

angular.module('angular-examples.animations', []);