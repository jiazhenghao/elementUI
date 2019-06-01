'use strict';

function Animal(voice) {
    this.voice = voice;
    this.sing = function() {
        console.log('Wa Ha Ha');
    }
}

Animal.prototype.speak = function() {
    console.log(this.voice);
};

function Cat(name, color) {
    Animal.call(this, 'Meoow');
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');
fluffy.speak();//Loud
//fluffy.sing();//fluffy.sing is not a function

var ki = new Animal();
ki.sing();//Wa Ha Ha

console.log(fluffy instanceof Cat);//true
console.log(fluffy);//Animal { name: 'Fluffy', color: 'White' }
//有了19行的代码，就变为Cat { name: 'Fluffy', color: 'White' }