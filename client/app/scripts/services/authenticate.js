angular.module('routesAndPromises').factory('Authenticate', ['$resource', 'System',
    function($resource, System) {
        return {
            name: '',
            systems: [],
            login: function() {
                var self = this;
                return $resource('http://localhost:8888/authenticate').get({delay: 2}).$promise.then(
                    function(response) {
                        self.name = response.name;
                        self.systems = response.systems;
                        return System.getSystems();
                    }
                );
            }
        };
    }
]);