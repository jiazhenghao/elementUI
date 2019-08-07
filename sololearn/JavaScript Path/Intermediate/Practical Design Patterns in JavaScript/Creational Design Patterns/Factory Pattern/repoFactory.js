const repoFactory = function() {
    this.getRepo = function(repoType) {
        if (repoType == 'task') {
            var taskRepo = require('./taskRepo.js');
            return taskRepo;
        } else if (repoType == 'user') {
            var userRepo = require('./userRepo.js');
            return userRepo;
        } else if (repoType == 'project') {
            var projectRepo = require('./projectRepo.js');
            return projectRepo;
        } 
    }
};
module.exports = new repoFactory;