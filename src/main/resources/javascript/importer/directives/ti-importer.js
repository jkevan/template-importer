angular.module('template.importer')
    .directive('tiImporter', ['tiContextInfos', function (tiContextInfos) {
        return {
            templateUrl: tiContextInfos.moduleBase + "/javascript/importer/directives/ti-importer.html",
            controller: ['$scope', '$timeout', 'tiDomSelectorService', 'tiProjectService', 'tiContextInfos', 'tiDialogs', '$mdDialog', '$mdToast',
                function ($scope, $timeout, tiDomSelectorService, tiProjectService, tiContextInfos, tiDialogs, $mdDialog, $mdToast) {
                    var iframe = undefined;
                    var _innerDoc = undefined;
                    $scope.ctx = {
                        projects: [],
                        projectIsDisplay: false,
                        projectUrl: undefined,
                        openMenuFct: null,
                        lastSelectedElement: null,
                        loading: false,
                        ctxMenuPosition: {
                            left: 0,
                            top: 0
                        }
                    };

                    var headers = "<%@ page language=\"java\" contentType=\"text/html;charset=UTF-8\" %> \
                    <!DOCTYPE html> \
                    <%@ taglib prefix=\"template\" uri=\"http://www.jahia.org/tags/templateLib\" %> \
                    <%@ taglib prefix=\"c\" uri=\"http://java.sun.com/jsp/jstl/core\" %> \
                    <%@ taglib prefix=\"fn\" uri=\"http://java.sun.com/jsp/jstl/functions\" %> \
                    <%@ taglib prefix=\"jcr\" uri=\"http://www.jahia.org/tags/jcr\" %> \
                    <%@ taglib prefix=\"fmt\" uri=\"http://java.sun.com/jstl/fmt_rt\" %> \
                    <%@ taglib prefix=\"functions\" uri=\"http://www.jahia.org/tags/functions\" %> \
                    <%--@elvariable id=\"currentNode\" type=\"org.jahia.services.content.JCRNodeWrapper\"--%> \
                    <%--@elvariable id=\"out\" type=\"java.io.PrintWriter\"--%> \
                    <%--@elvariable id=\"script\" type=\"org.jahia.services.render.scripting.Script\"--%> \
                    <%--@elvariable id=\"scriptInfo\" type=\"java.lang.String\"--%> \
                    <%--@elvariable id=\"workspace\" type=\"java.lang.String\"--%> \
                    <%--@elvariable id=\"renderContext\" type=\"org.jahia.services.render.RenderContext\"--%> \
                    <%--@elvariable id=\"currentResource\" type=\"org.jahia.services.render.Resource\"--%> \
                    <%--@elvariable id=\"url\" type=\"org.jahia.services.render.URLGenerator\"--%>";

                    tiProjectService.getProjects().success(function (data) {
                        if (data && data.children) {
                            angular.forEach(data.children, function (child, nodeName) {
                                $scope.ctx.projects.push(nodeName)
                            })
                        }
                    });

                    $scope.selectProject = function (project) {
                        $scope.ctx.loading = true;
                        $scope.ctx.selectedProject = project;
                        $scope.ctx.projectUrl = tiContextInfos.filesBase + "/sites/systemsite/files/ti-projects/" + project + "/index.html";
                    };

                    $scope.iframeLoadedCallBack = function (event) {
                        iframe = event.target;
                        _innerDoc = angular.element(iframe.contentDocument);
                        _initDomSelector();
                        $scope.$apply(function () {
                            $scope.ctx.loading = false;
                        })
                    };

                    $scope.saveProject = function () {
                        $scope.ctx.loading = true;
                        console.log("ti: saving project " + $scope.ctx.selectedProject);
                        tiDomSelectorService.stop();
                        var doc = new XMLSerializer().serializeToString(_innerDoc.get(0).doctype) + "\r\n" + _innerDoc.get(0).documentElement.outerHTML;
                        tiProjectService.saveProject($scope.ctx.selectedProject, doc).success(function () {
                            _initDomSelector();
                            console.log("ti: project " + $scope.ctx.selectedProject + " saved");
                            $scope.ctx.loading = false;
                            _displayToast("Project saved");
                        });
                    };

                    $scope.exportProject = function ($event) {
                        $mdDialog.show(tiDialogs.getExportProjectDialog($event, $scope.ctx.selectedProject))
                            .then(function (exportDialData) {
                                $scope.ctx.loading = true;
                                console.log("ti: exporting project " + $scope.ctx.selectedProject + " to module: " + exportDialData.module + " " + exportDialData.version);

                                var folderOfAssets = undefined;
                                _rewriteAreas();
                                folderOfAssets = _replaceByTemplateAddResources("script", "src", "javascript");
                                var result =  _replaceByTemplateAddResources("link", "href", "css");
                                folderOfAssets = folderOfAssets || result;
                                result = _rewriteSrcs(exportDialData.module, exportDialData.version);
                                folderOfAssets = folderOfAssets || result;

                                // TODO
                                tiProjectService.moveProjectAssets($scope.ctx.selectedProject, exportDialData.module, exportDialData.version, folderOfAssets).success(function() {
                                    tiDomSelectorService.stop();
                                    var doc = headers + "\r\n" + new XMLSerializer().serializeToString(_innerDoc.get(0).doctype) + "\r\n" + _innerDoc.get(0).documentElement.outerHTML;
                                    _displayToast("Project exported to module: " + exportDialData.module);
                                })
                            });
                    };

                    $scope.exportAsArea = function () {
                        // TODO export this hardcoded info to a dedicated form
                        var area = {
                            path: _generateId(),
                            createView: "jnt:text"
                        };
                        $scope.ctx.lastSelectedElement.attr("ti-area", JSON.stringify(area));
                    };

                    var _initDomSelector = function () {
                        tiDomSelectorService.start(iframe.contentDocument);
                        tiDomSelectorService.configureBinding("contextmenu", function (event) {
                            $scope.ctx.lastSelectedElement = angular.element(event.target);
                            event.preventDefault();
                            $scope.$apply(function () {
                                _calculatePositionOfCtxMenu(event);
                                // we need to calculate position of ctx.position
                                // using timeout to differ the menu position calculation to be apply before trying to draw the menu
                                $timeout(function () {
                                    if ($scope.ctx.openMenuFct) {
                                        $scope.ctx.openMenuFct(event);
                                    }
                                }, 0);
                            })
                        });
                        _adjustIframeHeight();
                    };

                    var _calculatePositionOfCtxMenu = function (event) {
                        $scope.ctx.ctxMenuPosition.left = iframe.getBoundingClientRect().left + event.pageX;
                        $scope.ctx.ctxMenuPosition.top = iframe.getBoundingClientRect().top + (event.pageY - _innerDoc.scrollTop());
                    };

                    var _adjustIframeHeight = function () {
                        angular.element(iframe).css('height', angular.element(window).height() - iframe.getBoundingClientRect().top);
                    };

                    var _generateId = function () {
                        return '_' + Math.random().toString(36).substr(2, 9);
                    };

                    var _rewriteAreas = function () {
                        _innerDoc.find("[ti-area]").each(function (key, element) {
                            console.log("ti: apply area rule");
                            var _element = angular.element(element);
                            var areaInfo = JSON.parse(_element.attr("ti-area"));
                            _element.replaceWith("<template:area path=\"" + areaInfo.path + "\"/>");
                        });
                    };

                    var _replaceByTemplateAddResources = function (tag, attr, type) {
                        var folder = undefined;
                        _innerDoc.find(tag + "[" + attr + "^='./']").each(function (key, element) {
                            var _element = angular.element(element);
                            var attrValue = _element.attr(attr);
                            folder = attrValue.split("/")[1]; // TODO this is dirty to find the folder of ressources try an other way
                            _element.replaceWith("<template:addResources type=\"" + type + "\"  resources=\"" + attrValue.substring(attrValue.lastIndexOf("/") + 1) + "\"/>")
                        });
                        return folder;
                    };

                    var _rewriteSrcs = function (module, version) {
                        var folder = undefined;
                        _innerDoc.find("[src^='./']").each(function (key, element) {
                            var _element = angular.element(element);
                            var attrValue = _element.attr("src");
                            folder = attrValue.split("/")[1]; // TODO this is dirty to find the folder of ressources try an other way
                            _element.attr("src", "/files/default/modules/" + module + "/" + version + "/templates/files/" + attrValue.substring(attrValue.lastIndexOf("/") + 1));
                        });
                        return folder;
                    };

                    var _displayToast = function (message) {
                        $mdToast.show(
                            $mdToast.simple()
                                .content(message)
                                .position("bottom right")
                                .hideDelay(3000)
                        );
                    }
                }]
        }
    }]);