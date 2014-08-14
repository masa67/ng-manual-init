
angular.module('myApp', ['ngRoute', 'ngResource', 'appRoutes', 'config', 'AuthenticationResource', 'MainCtrl']);

(function() {
    var initInjector = angular.injector(['ng']);
    var $http = initInjector.get('$http');
    $http.get('/client.json').success(
        function (settings) {
            angular.module('config', []).constant('CONFIG', settings);

            angular.element(document).ready(function() {
                angular.bootstrap(document, ['myApp']);
            });
        }
    );
})();
