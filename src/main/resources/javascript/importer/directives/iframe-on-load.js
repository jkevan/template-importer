angular.module('template.importer.directive.iframeOnLoad', [])
    .directive('iframeOnload', [function () {
        return {
            scope: {
                callBack: '@iframeOnload'
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