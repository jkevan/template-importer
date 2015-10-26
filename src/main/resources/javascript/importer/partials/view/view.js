angular.module('template.importer.view', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view/:moduleId', {
            templateUrl: templateImporter.moduleBase + '/javascript/importer/partials/view/view.html',
            controller: 'ViewCtrl'
        });
    }])

    .controller('ViewCtrl', ['$scope', function($scope) {

    }]);