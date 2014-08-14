
angular.module('AuthenticationResource', ['AuthenticationResource'])
    .factory('authenticationResource',
     ['$resource', 'CONFIG', function ($resource,  CONFIG) {
        var authUrl = CONFIG.webApiUri + '/api/authentication';
        return $resource(authUrl, {},
            {
                login: {
                    method: 'POST',
                    isArray: false
                },
                logout: {
                    method: 'DELETE',
                    isArray: false
                }
            });
    }]);
