angular.module('template.importer.view', ['ngRoute',
    'template.importer.directive.iframeOnLoad',
    'template.importer.service.visualDomSelector'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view/:projectId', {
            templateUrl: templateImporter.moduleBase + '/javascript/importer/partials/view/view.html',
            controller: 'ViewCtrl'
        });
    }])

    .controller('ViewCtrl', ['$scope', '$routeParams', 'domSelectorService', function($scope, $routeParams, domSelectorService) {
        var projectId =  $routeParams.projectId;
        $scope.projectUrl = templateImporter.moduleBase + '/javascript/importer/projects/' + projectId + "/" + projectId + ".html"

        $scope.iframeLoadedCallBack = function (event) {
            domSelectorService.start(event.target.contentDocument);
        };
    }]);