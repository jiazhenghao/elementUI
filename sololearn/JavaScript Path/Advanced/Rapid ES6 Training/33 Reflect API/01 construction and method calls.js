//console.log(typeof Reflect);//object

class Restaurant {
    constructor() {
        console.log(`new target : ${new.target}` );
    }
}
function restaurantMaker() {
    console.log('in restaurantMaker');
}
let r = Reflect.construct(Restaurant, ["Zoey's", "Shanghai"], restaurantMaker);
/*
new target : function restaurantMaker() {
    console.log('in restaurantMaker');
}
*/
