angular.module('routesAndPromises').factory('Devices', ['$resource', 'APIDelay',
    function($resource, APIDelay) {
        return {
            devices: {},
            devicesFetched: false,
            getDevices: function() {
                var self = this;
                self.devices = {};
                $resource('/api/devices').get({delay: APIDelay},
                    function(response) {
                        angular.forEach(response.devices, function(device) {
                            if (self.devices[device.system_id] === undefined)  {
                                self.devices[device.system_id] = [];
                            }
                            self.devices[device.system_id].push(device);
                        });
                        self.devicesFetched = true;
                        console.log(self.devices);
                    }
                );
            }
        };
    }
]);