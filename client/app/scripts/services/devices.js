angular.module('routesAndPromises').factory('Devices', ['$resource', 'APIDelay',
    function($resource, APIDelay) {
        return {
            devices: {},
            getDevices: function() {
                var self = this;
                self.devices = {};
                return $resource('/api/devices').get({delay: APIDelay}).$promise.then(
                    function(response) {
                        angular.forEach(response.devices, function(device) {
                            if (self.devices[device.system_id] === undefined)  {
                                self.devices[device.system_id] = [];
                            }
                            self.devices[device.system_id].push(device);
                        });
                        return response;
                    }
                );
            }
        };
    }
]);