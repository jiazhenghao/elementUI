class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(5, 5);
console.log(square.area);//25;
console.log(square.calcArea());//25
/*
    In the code above, area is a getter, calcArea is a method;
    ES6 introduced a shorthand that does not require the keyword "function"
    for a function assigned to a method's name.
    One type of class method is the "prototype method", which is available to objects of the class.
*/

/*
    Another type of method is the static method, which cannot be called from an instance.
    Static method is often used to create utility(通用的) functions for an application.
*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(3, 0);
const p2 = new Point(0, 4);
console.log(Point.distance(p1, p2));//5
