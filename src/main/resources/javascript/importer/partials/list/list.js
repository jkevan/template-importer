angular.module('template.importer.list', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: templateImporter.moduleBase + '/javascript/importer/partials/list/list.html',
            controller: 'ListCtrl'
        });
    }])

    .controller('ListCtrl', ['$scope', function($scope) {

    }]);