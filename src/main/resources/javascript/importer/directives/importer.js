angular.module('template.importer')
    .directive('importer', [function () {
        return {
            templateUrl: templateImporter.moduleBase + "/javascript/importer/directives/importer.html",
            controller: ['$scope', 'domSelectorService', function($scope, domSelectorService) {
                $scope.projectUrl = templateImporter.moduleBase + "/javascript/importer/projects/snowboard/snowboard.html";

                $scope.iframeLoadedCallBack = function (event) {
                    domSelectorService.start(event.target.contentDocument);
                    domSelectorService.configureBinding("contextmenu", function(event) {
                        $scope.$apply(function() {
                            event.preventDefault();
                            //fn(scope, {$event:event});
                            console.log("context menu:" + event.target)
                        });
                    })
                };
            }]
        }
    }]);