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

        this.saveProject = function(project, html) {
            return $http.put(this.buildURL(undefined, undefined, "paths",
                "/sites/systemsite/files/ti-projects/" + project + "/index.html/jcr:content/properties/jcr:data"),
                {"value": html});
        };

        this.exportProject = function(data) {
            return $http.post("/modules/api/ti/v1/export", data);
        };

        this.exportPage = function(data) {
            return $http.post("/modules/api/ti/v1/exportPage", data);
        };
    }]);