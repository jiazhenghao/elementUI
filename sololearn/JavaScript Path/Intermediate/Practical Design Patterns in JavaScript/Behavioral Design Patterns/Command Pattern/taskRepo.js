var repo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new Task from DB'
        };
    },
    save: function (task) {
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    },
    replay: function() {
        for (var i = 0; i < repo.commands.length; i++) {
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
};
repo.executeNoLog = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    if(repo[name]) {
        return repo[name].apply(repo, args);
    }
};

repo.execute = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name:name,
        obj: args[0]
    });
    if(repo[name]) {
        return repo[name].apply(repo, args);
    }
    return false;
};
repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});//Saving Task 1 to the db
repo.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});
repo.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});
repo.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: false
});
console.log('**********');
console.log(repo.tasks);
console.log('**********');
repo.tasks = {};
console.log(repo.tasks);
console.log('**********');
repo.replay();
console.log(repo.tasks);

/*
Saving Task 1 to the db
Saving Task 2 to the db
Saving Task 3 to the db
Saving Task 4 to the db
**********
{
  '1': { id: 1, name: 'Task 1', completed: false },
  '2': { id: 2, name: 'Task 2', completed: false },
  '3': { id: 3, name: 'Task 3', completed: false },
  '4': { id: 4, name: 'Task 4', completed: false }
}
**********
{}
**********
Saving Task 1 to the db
Saving Task 2 to the db
Saving Task 3 to the db
Saving Task 4 to the db
{
  '1': { id: 1, name: 'Task 1', completed: false },
  '2': { id: 2, name: 'Task 2', completed: false },
  '3': { id: 3, name: 'Task 3', completed: false },
  '4': { id: 4, name: 'Task 4', completed: false }
}
*/

