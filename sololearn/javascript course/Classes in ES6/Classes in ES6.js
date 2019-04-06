/*
    A class uses the keyword class and contains a constructor method for initializing.
    Only one constructor in each class, which is different from Java.
    For example:
*/
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
/*
    A declared class can then be used to create multiple objects using the keyword "new"
*/
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);
/*
    Tips: Class declarations are not hoisted while Function declarations are.
*/
//A named class expression
var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
//unnamed class expression
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

