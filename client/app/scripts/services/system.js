angular.module('routesAndPromises').factory('System', ['$resource', 'APIDelay',
    function($resource, APIDelay) {
        return {
            systems: {},
            getSystems: function() {
                var self = this;
                self.systems = {};
                return $resource('/api/systems').get({delay: APIDelay}).$promise.then(
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