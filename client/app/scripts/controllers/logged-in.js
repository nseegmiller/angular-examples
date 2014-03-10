angular.module('routesAndPromises').controller('LoggedInCtrl', ['$scope', 'Authenticate', 'System',
    function($scope, Authenticate, System) {
        $scope.Authenticate = Authenticate;
        $scope.System = System;
//        Authenticate.login();
    }
]);