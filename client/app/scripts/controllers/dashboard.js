angular.module('angular-examples').controller('DashboardCtrl', ['$scope',
    function($scope) {
        $scope.ngif = false;
        $scope.toggleVariable = function(variable) {
            if (variable === 'nginclude') {
                if (!$scope[variable]) {
                    $scope[variable] = 'views/sub-doge.html';
                }
                else {
                    $scope[variable] = undefined;
                }
            }
            else {
                $scope[variable] = !$scope[variable];
            }
        };
    }
]);