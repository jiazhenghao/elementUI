class Task {
    constructor() {
        console.log('constructing Task');
    }
    showId() {
        console.log('123');
    }
}
let task = new Task();
console.log(typeof Task);//function
console.log(typeof task);//object
console.log(task instanceof Task);//true
console.log(task.showId === Task.prototype.showId);//true

