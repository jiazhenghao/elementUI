const repoFactory = function () {
    var repos = this;
    var repoList = [
        { name: 'task', source: './taskRepo.js'},
        { name: 'user', source: './userRepo.js' },
        { name: 'project', source: './projectRepo.js' },
    ];
    repoList.forEach(function(repo) {
        repos[repo.name] = require(repo.source)();
    });
};

module.exports = new repoFactory;