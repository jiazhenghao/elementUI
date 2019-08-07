/*
var factory = require('./repoFactory.js');
var j = new factory();
var task = j.getRepo('task');
var example = new task('idd1');
example.save();//saving task: idd1
*/

/*
var factory = require('./repoFactory.js');
var example = new ((new factory()).getRepo('task'))('idd1');
example.save();//saving task: idd1
*/

var factory = require('./repoFactory.js');
var task = factory.getRepo('task');
task.name = 'idd1';
task.save();//saving task: idd1
