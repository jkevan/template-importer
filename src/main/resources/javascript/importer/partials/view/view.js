angular.module('template.importer.view', ['ngRoute', 'template.importer.directive.iframeOnLoad'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view/:projectId', {
            templateUrl: templateImporter.moduleBase + '/javascript/importer/partials/view/view.html',
            controller: 'ViewCtrl'
        });
    }])

    .controller('ViewCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        var projectId =  $routeParams.projectId;
        $scope.projectUrl = templateImporter.moduleBase + '/javascript/importer/projects/' + projectId + "/" + projectId + ".html"

        $scope.iframeLoadedCallBack = function (element) {
            console.log("IFRAME LOADED")
        };
    }]);