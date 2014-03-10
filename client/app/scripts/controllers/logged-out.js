angular.module('routesAndPromises').controller('LoggedOutCtrl', ['$scope', 'Authenticate',
    function($scope, Authenticate) {
        $scope.info = 'Welcome home!';

        $scope.login = function() {
            $scope.userInfo = Authenticate.login();
        };
    }
]);