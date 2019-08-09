var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.priority;
    this.user = data.user;
    this.completed = data.completed;
};

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function(data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function(name) {
        return tasks[name];
    };
    var getCount = function() {
        return count;
    };
    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = new TaskCollection();
var projects = ['none', 'course','']

