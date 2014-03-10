angular.module('routesAndPromises').factory('System', ['$resource',
    function($resource) {
        return {
            systems: {},
            getSystems: function() {
                var self = this;
                self.systems = {};
                return $resource('http://localhost:8888/systems').get({delay: 2}).$promise.then(
                    function(response) {
                        angular.forEach(response.systems, function(system) {
                            self.systems[system.system_id] = {'name': system.name};
                        });
                        return response;
                    }
                );
            }
        };
    }
]);