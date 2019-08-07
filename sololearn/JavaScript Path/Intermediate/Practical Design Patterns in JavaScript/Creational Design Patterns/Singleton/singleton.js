var TaskRepo = (function () {
    var taskRepo;
    function createRepo() {
        taskRepo = new Object('Task');
        return taskRepo;
    }
    return {
        getInstance: function() {
            if (!taskRepo) {
                return createRepo();
            } else {
                return taskRepo;
            }
        }
    };
})();
var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();
console.log(repo1 === repo2);
console.log(repo1);//[String: 'Task']


