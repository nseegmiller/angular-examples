angular.module('routesAndPromises').controller('DashboardExtendedCtrl', ['$controller', '$scope',
    function($controller, $scope) {
        $scope.extendedProperty = 'So extended';
        $controller('DashboardCtrl', {$scope: $scope});
    }
]);