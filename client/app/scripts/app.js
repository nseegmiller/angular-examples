angular.module('routesAndPromises', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LoggedOutCtrl',
                templateUrl: 'views/login.html'
            })
            .when('/dashboard', {
                controller: 'LoggedInCtrl',
                templateUrl: 'views/dashboard.html',
                resolve: {
                    data: ['Authenticate', function(Authenticate) {
                        return Authenticate.login();
                    }]
                }
            })
            .otherwise({
                redirectTo:'/'
            });
    })