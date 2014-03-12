angular.module('routesAndPromises').factory('Authenticate', ['$resource', 'System', 'APIDelay', '$q',
    function($resource, System, APIDelay, $q) {
        return {
            name: '',
            systems: [],
            login: function() {
                var self = this;
                return $resource('/api/authenticate').get({delay: APIDelay}).$promise.then(
                    function(response) {
                        self.name = response.name;
                        self.systems = response.systems;
                        return response;
                    }
                );
            }
        };
    }
]);