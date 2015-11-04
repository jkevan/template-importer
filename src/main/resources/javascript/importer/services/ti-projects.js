angular.module('template.importer')
    .service('tiProjectService', ['$http', 'tiContextInfos', function ($http, tiContextInfos) {
        this.buildURL = function (workspace, locale, type, endUrl) {
            return [tiContextInfos.jcrRestAPIBase,
                    workspace ? workspace : "default",
                    locale ? locale : tiContextInfos.uiLocale,
                    type ? type : "nodes"].join("/") + endUrl;
        };

        this.getProjects = function () {
            return $http.get(this.buildURL(undefined, undefined, "paths", "/sites/systemsite/files/ti-projects"));
        };
    }]);