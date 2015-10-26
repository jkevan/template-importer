angular.module('template.importer', [
    'ngRoute',
    'template.importer.list',
    'template.importer.view'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/list'});
}]);