class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }

    save() {
        console.log('saving task: ' + this.name);
    }
}

module.exports = new Task;