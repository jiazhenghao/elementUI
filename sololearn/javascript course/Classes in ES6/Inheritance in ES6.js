/*
    extends keyword is used to create a child of a class
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks');
    }
}
let dog = new Dog('Alex');
dog.speak();//Alex barks

/*
    If there is a constructor present in the subclass(子类), it needs to first
    call super() before using this.
    Also, the super keyword is used to call parent's methods.
*/
class Lion extends Animal {
    speak() {
        super.speak();
        console.log(this.name + ' growls');
    }
}
let lionKing = new Lion('Simba');
lionKing.speak();//Simba makes a noise. Simba growls

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Human {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
