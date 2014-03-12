angular.module('routesAndPromises').controller('DashboardCtrl', ['$scope', 'Authenticate', 'System', 'Devices', 'greeting',
    function($scope, Authenticate, System, Devices, greeting) {
        $scope.Authenticate = Authenticate;
        $scope.System = System;
        $scope.Devices = Devices;

        $scope.greeting = greeting;
        $scope.activeHome = 1;
    }
]);