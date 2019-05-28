function Animal(name, color) {
    this.name = name;
    this.color = color;
    this.speak = function() {
        console.log("Roal");
    }
}
let cat = new Animal('cat', 'white');
console.log(cat);//Animal { name: 'cat', color: 'white' }
cat.speak();//Roal

