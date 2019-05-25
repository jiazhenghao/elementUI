class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from level ${this.level}`);
    }
}

const p1 = new Person("Mark Twins");
const p2 = new Student("Tinna", 3);
const p3 = new Student("Jenna Wane", 2);
p3.greet = () => console.log("I am special!");

p1.greet();
p2.greet();
p3.greet();