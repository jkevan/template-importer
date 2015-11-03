angular.module('template.importer')
    .service('tiProjectService', ['$http', function ($http) {
        this.buildURL = function (workspace, locale, type, endUrl) {
            return [templateImporter.jcrRestAPIBase,
                    workspace ? workspace : "default",
                    locale ? locale : templateImporter.uiLocale,
                    type ? type : "nodes"].join("/") + endUrl;
        };

        this.getProjects = function () {
            return $http.get(this.buildURL(undefined, undefined, "paths", "/sites/systemsite/files/ti-projects"));
        };
    }]);