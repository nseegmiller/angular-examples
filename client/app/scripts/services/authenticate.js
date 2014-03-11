angular.module('routesAndPromises').factory('Authenticate', ['$resource', 'System', 'APIDelay',
    function($resource, System, APIDelay) {
        return {
            name: '',
            systems: [],
            loginCompleted: false,
            login: function() {
                var self = this;
                $resource('/api/authenticate').get({delay: APIDelay},
                    function(response) {
                        self.name = response.name;
                        self.systems = response.systems;
                        self.loginCompleted = true;
                    }
                );
            }
        };
    }
]);