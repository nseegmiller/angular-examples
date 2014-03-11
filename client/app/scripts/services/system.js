angular.module('routesAndPromises').factory('System', ['$resource', 'APIDelay',
    function($resource, APIDelay) {
        return {
            systems: {},
            systemsFetched: false,
            getSystems: function() {
                var self = this;
                self.systems = {};
                $resource('http://localhost:8888/systems').get({delay: APIDelay},
                    function(response) {
                        angular.forEach(response.systems, function(system) {
                            self.systems[system.system_id] = {'name': system.name};
                        });
                        self.systemsFetched = true;
                    }
                );
            }
        };
    }
]);