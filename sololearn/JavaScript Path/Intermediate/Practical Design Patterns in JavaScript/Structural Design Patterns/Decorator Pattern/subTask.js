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

// var myTask = new Task('Legacy Task');
// myTask.complete();
// myTask.save();

var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function(str) {
    console.log('notifying important people ' + str);
};
UrgentTask.prototype.save = function(str) {
    this.notify(str);
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is urgent', 1);
//console.log(ut);//UrgentTask { name: 'This is urgent', completed: false, priority: 1 }
ut.save('!!!');
//notifying important people !!!
//saving Task: This is urgent

