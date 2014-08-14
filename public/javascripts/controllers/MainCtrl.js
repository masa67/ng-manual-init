
angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'authenticationResource', function($scope, authenticationResource) {
        authenticationResource.login('{"user" : "guest"}', function(data) {
            alert(data.msg);
        });
    }]
);