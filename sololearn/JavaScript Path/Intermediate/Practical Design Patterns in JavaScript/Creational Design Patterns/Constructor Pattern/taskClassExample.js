const Task = require('./taskClass.js');

let task1 = new Task('id5');
let task2 = new Task('id6');
let task3 = new Task('id7');
let task4 = new Task('id8');

task1.complete();
task2.complete();
task3.save();
task4.save();
/*
completing task: id5
completing task: id6
saving task: id7
saving task: id8
*/