/**
 * Q2
 * What will happen if program reaches "return" statement?
 */
//1.The function stops executing
//2.The function gives back a value

/**
 * Q4
 * 
 */
var obj1 = {
    x: 1,
    f: function () {
        //console.log(this);//{x: 1, f: ƒ}
        this.x = 2;
    }
};
var obj2 = {
    x:obj1.x
};
obj1.f();//执行完成以后，obj的x变成2。但obj2，早就已经是1了，不会再变了。
console.log(obj1.x);//2
console.log(obj2.x);//1

/**
 * Q5
 */
var a = Math.floor(Math.abs((x = -2) + x));
console.log(a);//4
console.log(y=-2);//-2


