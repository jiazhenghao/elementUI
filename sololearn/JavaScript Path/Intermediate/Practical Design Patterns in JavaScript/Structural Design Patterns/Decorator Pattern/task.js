var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();
/*
completing task: Legacy Task
saving Task: Legacy Task
*/
var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.save = function(str) {
    console.log(str);
    Task.prototype.save.call(this);
};
urgentTask.save("wow");
/*
wow
saving Task: Urgent Task
*/
