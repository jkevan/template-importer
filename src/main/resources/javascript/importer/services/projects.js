angular.module('template.importer.service.projects', [])
    .service('projectsService', [function(){
        this.getProjects = function() {
            return ["snowboard"]
        };

        this.uploadProject = function() {
            //todo
        }
    }]);