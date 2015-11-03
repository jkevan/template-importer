angular.module('template.importer')
    .directive('tiCatchOpenMenu', [function () {
        return {
            scope: {
                tiOpenMenu: '&',
                tiModel: '='
            },
            controller: ['$scope', function($scope) {
                $scope.tiModel = $scope.tiOpenMenu;
            }]
        }
    }]);