function Task(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        this.completed = true;
        console.log('completing task: ' + this.name);
    }

    this.save = function() {
        console.log('saving task: ' + this.name);
    }
}

var task1 = new Task('create a demo for coonstructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();//completing task: create a demo for coonstructors
task2.save();//saving task: create a demo for modules
task3.save();//saving task: create a demo for singletons
task4.save();//saving task: create a demo for prototypes




