angular.module('routesAndPromises', ['ngRoute', 'ngResource'])
    .constant('APIDelay', 1)
    .config(function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html',
                resolve: {
                    // Just an example of using the route to inject something into the controller
                    greeting: function() {
                        return 'Welcome';
                    },
                    sideEffect: function(Authenticate, Devices, System, $rootScope) {
                        // A clever way to set the title of a page with routes
                        $rootScope.title = 'Routes and Promises';

                        // The route won't change until this promise stack fully resolves
                        return Authenticate.login().then(function() {
                            return System.getSystems().then(function() {
                                return Devices.getDevices();
                            });
                        });
                    }
                }
            })
            .otherwise({
                redirectTo:'/dashboard'
            });
    });