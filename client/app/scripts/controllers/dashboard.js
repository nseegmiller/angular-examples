angular.module('routesAndPromises').controller('DashboardCtrl', ['$scope', 'Authenticate', 'System', 'Devices',
    function($scope, Authenticate, System, Devices) {
        $scope.Authenticate = Authenticate;
        $scope.System = System;
        $scope.Devices = Devices;

        $scope.activeHome = 1;

        Authenticate.login();

        $scope.$watch('Authenticate.loginCompleted', function(value) {
            if (value) {
                System.getSystems();
            }
        });

        $scope.$watch('System.systemsFetched', function(value) {
            if (value) {
                Devices.getDevices();
            }
        })
    }
]);