class Location {
    constructor() {
        console.log('constructing Location');
    }
}
class Restaurant extends Location {

}
console.log(Reflect.getPrototypeOf(Restaurant));
//[Function: Location]  nodejs

/*
chrome 
class Location {
    constructor() {
        console.log('constructing Location');
    }
}
*/