angular.module('template.importer')
    .directive('tiIframeOnload', [function () {
        return {
            scope: {
                callBack: '@tiIframeOnload'
            },
            link: function (scope, element, attrs) {
                element.on('load', function (event) {
                    if (scope.$parent[scope.callBack]) {
                        scope.$parent[scope.callBack](event);
                    }
                })
            }
        }
    }]);