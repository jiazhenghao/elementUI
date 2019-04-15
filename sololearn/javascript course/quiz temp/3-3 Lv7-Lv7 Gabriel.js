/**
Q2 
object.create和hasOwnProperty
*/
var x = 0;
var gun = Object.create({bullets:10, shots:0});
console.log(gun);//{}
a = gun.hasOwnProperty("bullets");
b = gun.hasOwnProperty("shots");
c = gun.hasOwnProperty("shooting");
console.log(c);//false
if (a && b)
	x++;
console.log(gun.bullets);//10 从原型链中得到的
console.log(a + " " + b);//false false
console.log(x);//0
gun.shooting = true;
//gun.bullets = 9;
gun.shots = 1;
x++;
console.log(x);//1
console.log(gun);//{shooting: true, shots: 1}
console.log(gun.hasOwnProperty("shooting"));//true
console.log(gun.hasOwnProperty("bullets"));//false

