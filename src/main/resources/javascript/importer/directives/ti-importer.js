angular.module('template.importer')
    .directive('tiImporter', [function () {
        return {
            templateUrl: templateImporter.moduleBase + "/javascript/importer/directives/ti-importer.html",
            controller: ['$scope', '$timeout', 'domSelectorService', function($scope, $timeout, domSelectorService) {
                var iframe = undefined;
                var _innerDoc = undefined;
                $scope.ctx = {
                    projectUrl: templateImporter.moduleBase + "/javascript/importer/projects/snowboard/snowboard.html",
                    openMenuFct : null,
                    ctxMenuPosition : {
                        left: 0,
                        top: 0
                    }
                };

                $scope.iframeLoadedCallBack = function (event) {
                    iframe = event.target;
                    _innerDoc = angular.element(iframe.contentDocument);
                    domSelectorService.start(iframe.contentDocument);
                    domSelectorService.configureBinding("contextmenu", function(event) {
                        event.preventDefault();
                        $scope.$apply(function(){
                            _calculatePositionOfCtxMenu(event);
                            // we need to calculate position of ctx.position
                            // using timeout to differ the menu position calculation to be apply before trying to draw the menu
                            $timeout(function() {
                                if($scope.ctx.openMenuFct) {
                                    $scope.ctx.openMenuFct(event);
                                }
                            }, 0);
                        })
                    });
                    _adjustIframeHeight();
                };

                var _calculatePositionOfCtxMenu = function(event) {
                    $scope.ctx.ctxMenuPosition.left = iframe.getBoundingClientRect().left + event.pageX;
                    $scope.ctx.ctxMenuPosition.top = iframe.getBoundingClientRect().top + (event.pageY - _innerDoc.scrollTop());
                };

                var _adjustIframeHeight = function() {
                    angular.element(iframe).css('height', angular.element(window).height() - iframe.getBoundingClientRect().top);
                }
            }]
        }
    }]);