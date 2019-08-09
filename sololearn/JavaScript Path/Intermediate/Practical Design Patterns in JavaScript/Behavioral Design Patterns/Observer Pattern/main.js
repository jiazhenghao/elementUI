var Task = require('./task');
var task1 = new Task({
    name: 'create a demo for constructors',
    user: 'John'
});
task1.save();