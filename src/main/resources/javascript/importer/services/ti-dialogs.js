angular.module('template.importer')

    .service('tiDialogs', ['tiContextInfos', function (tiContextInfos) {
        this.getExportProjectDialog = function($event, projectName) {
            return {
                controller: ["$scope", "$mdDialog", function ($scope, $mdDialog) {
                    // TODO drop downlist of available modules
                    $scope.exportDial = {
                        module: "template-importer",
                        version: "1.0-SNAPSHOT",
                        templateName: projectName
                    };

                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.answer = function () {
                        $mdDialog.hide($scope.exportDial);
                    };
                }],
                templateUrl: tiContextInfos.moduleBase + "/javascript/importer/services/dialogs/ti-export-project.html",
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true
            }
        };

        this.getExportAsAreaDialog = function($event, area) {
            var _generateId = function () {
                return '_' + Math.random().toString(36).substr(2, 9);
            };

            return {
                controller: ["$scope", "$mdDialog", function ($scope, $mdDialog) {
                    $scope.areaDial = area || {
                        path: _generateId(),
                        viewType: "jnt:text",
                        createDefinition: false
                    };

                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.answer = function () {
                        $mdDialog.hide($scope.areaDial);
                    };
                }],
                templateUrl: tiContextInfos.moduleBase + "/javascript/importer/services/dialogs/ti-export-area.html",
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true
            }
        }
    }]);