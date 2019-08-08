var Task = function (data) {
    this.name = data.name;
    this.property = data.property;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = (function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving task: ' + task.name);
        }
    };
})();

var myTask = new Task({
    name: 'Zhenghao Jia',
    priority: 1,
    project: 'Design Pattern',
    user: 'Lily',
    completed: false
});

var TaskServiceWrapper = (function() {
    var completeAndNotify = function(task) {
        TaskService.complete(task);
        if (task.completed) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        } 
    };
    return {
        completeAndNotify: completeAndNotify
    };
})();

TaskServiceWrapper.completeAndNotify(myTask);

/*
completing task: Zhenghao Jia
Zhenghao Jia completed on Thu Aug 08 2019 21:32:27 GMT+0800 (GMT+08:00)
Notifying Lily of the completion of Zhenghao Jia
saving task: Zhenghao Jia
*/
