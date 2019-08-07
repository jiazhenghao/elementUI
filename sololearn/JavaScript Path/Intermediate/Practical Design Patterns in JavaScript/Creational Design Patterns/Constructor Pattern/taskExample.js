const Task = require('./task.js');

let task1 = new Task('id1');
let task2 = new Task('id2');
let task3 = new Task('id1');
let task4 = new Task('id2');

task1.complete();
task2.complete();
task3.save();
task4.save();

/*
completing task: id1
completing task: id2
saving task: id1
saving task: id2
*/

