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
        }
    }]);