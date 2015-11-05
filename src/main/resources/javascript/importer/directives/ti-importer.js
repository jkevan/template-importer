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
                        $scope.ctx.lastSelectedElement = angular.element(event.target);
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

                $scope.saveProject = function() {
                    console.log("ti: saving project " + $scope.ctx.selectedProject);
                    tiDomSelectorService.stop();
                    var doc = new XMLSerializer().serializeToString(_innerDoc.get(0).doctype) + "\r\n" + _innerDoc.get(0).documentElement.outerHTML;
                    tiProjectService.saveProject($scope.ctx.selectedProject, doc).success(function() {
                        console.log("ti: project " + $scope.ctx.selectedProject + " saved")
                    });
                };

                $scope.exportProject = function () {
                    console.log("ti: exporting project " + $scope.ctx.selectedProject);
                    _innerDoc.find("[ti-area]").each(function(key, element) {
                        console.log("ti: apply area rule");
                        angular.element(element).replaceWith("<div>test</div>");
                    });
                };

                $scope.exportAsArea = function() {
                    // TODO open modal form to be able to set detail about this area
                    var area = {
                        path: _generateId()

                    };
                    $scope.ctx.lastSelectedElement.attr("ti-area", JSON.stringify(area));
                };

                var _calculatePositionOfCtxMenu = function(event) {
                    $scope.ctx.ctxMenuPosition.left = iframe.getBoundingClientRect().left + event.pageX;
                    $scope.ctx.ctxMenuPosition.top = iframe.getBoundingClientRect().top + (event.pageY - _innerDoc.scrollTop());
                };

                var _adjustIframeHeight = function() {
                    angular.element(iframe).css('height', angular.element(window).height() - iframe.getBoundingClientRect().top);
                };

                var _generateId = function() {
                    return '_' + Math.random().toString(36).substr(2, 9);
                }
            }]
        }
    }]);