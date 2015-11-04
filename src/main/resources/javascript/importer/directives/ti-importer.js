angular.module('template.importer')
    .directive('tiImporter', ['tiContextInfos', function (tiContextInfos) {
        return {
            templateUrl: tiContextInfos.moduleBase + "/javascript/importer/directives/ti-importer.html",
            controller: ['$scope', '$timeout', 'tiDomSelectorService', 'tiProjectService', function($scope, $timeout, tiDomSelectorService, tiProjectService) {
                var iframe = undefined;
                var _innerDoc = undefined;
                $scope.ctx = {
                    projects:[],
                    projectIsDisplay:false,
                    projectUrl: undefined,
                    openMenuFct : null,
                    lastSelectedElement: null,
                    ctxMenuPosition : {
                        left: 0,
                        top: 0
                    }
                };

                tiProjectService.getProjects().success(function(data) {
                    if(data && data.children) {
                        angular.forEach(data.children, function(child, nodeName) {
                            $scope.ctx.projects.push(nodeName)
                        })
                    }
                });

                $scope.selectProject = function (project) {
                    $scope.ctx.selectedProject = project;
                    $scope.ctx.projectUrl = tiContextInfos.filesBase + "/sites/systemsite/files/ti-projects/" + project + "/index.html";
                };

                $scope.iframeLoadedCallBack = function (event) {
                    iframe = event.target;
                    _innerDoc = angular.element(iframe.contentDocument);
                    tiDomSelectorService.start(iframe.contentDocument);
                    tiDomSelectorService.configureBinding("contextmenu", function(event) {
                        $scope.ctx.lastSelectedElement = event.target;
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

                $scope.exportAsArea = function() {
                    console.log("yolo");
                    //  TODO
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