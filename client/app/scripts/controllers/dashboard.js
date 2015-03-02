angular.module('angular-examples').controller('DashboardCtrl', ['$scope', '$location', '$rootScope',
    function ($scope, $location, $rootScope) {
        // Object to avoid shadowing/scoping issues
        $scope.sortDir = {
            reverse: false
        };

        $scope.list = [
            {action: function() { toggleVariable('ngif') }, label: 'ng-if', sort: 1},
            {action: function() { toggleVariable('nginclude') }, label: 'ng-include', sort: 2},
            {action: function() { toggleVariable('keyframes') }, label: 'keyframes', sort: 3},
            {action: function() { $scope.go('/other-page', 'opacity-fade') }, label: 'change views - broken', sort: 4},
            {action: function() { $scope.go('/other-page', 'opacity-fade-absolute') }, label: 'change views - absolute', sort: 5},
            {action: function() { toggleRootVariable('compliment') }, label: 'ng-class', sort: 6},
            {action: function() { toggleVariable('ngshow') }, label: 'ng-show', sort: 7},
            {action: function() { toggleVariable('multipart') }, label: 'multipart', sort: 9},
            {action: function() { toggleVariable('lotsofprops') }, label: 'lots of props', sort: 10}
        ];

        $scope.ngif = false;

        // Set an initial transition class. I'd normally do this in some sort of parent controller
        $rootScope.transitionClass = 'opacity-fade';

        // A very handy navigation function that lets you use unique transitions for each navigation
        $scope.go = function (page, transitionClass) {
            if (transitionClass !== undefined) {
                $rootScope.transitionClass = transitionClass;
            }
            $location.path(page);
        };

        var toggleVariable = function (variable) {
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

        var toggleRootVariable = function (variable) {
            $rootScope[variable] = !$rootScope[variable];
        };

        $scope.$location = $location;
    }
]);