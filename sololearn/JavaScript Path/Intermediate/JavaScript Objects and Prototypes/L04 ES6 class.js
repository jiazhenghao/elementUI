class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log('Meeoow');
    }
}
let cat = new Animal('Fluty', 'White');
console.log(cat);//Animal { name: 'Fluty', color: 'White' }
cat.speak();//Meeoow
