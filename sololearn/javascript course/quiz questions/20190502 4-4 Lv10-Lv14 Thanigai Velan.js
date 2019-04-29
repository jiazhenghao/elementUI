/**
 * Q2
 */
var str = "Hello";
console.log(str === "Hello");//true

const visibleLightWaves = () => {
    let lightwaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightwaves = 'North Lights';//因为let的作用域是块内！！！！
    }
    console.log(lightwaves);
}
visibleLightWaves();//Moonlight

/**
 * Q3
 */
// console.log({} == true);//false
// var a = {};
// console.log(a == true);//false
// if (a) {
//     console.log("wonderful");//wonderful
// }
// else {
//     console.log("ugly");
// }
// if (null) {
//     console.log(1);
// }
// if (undefined) {
//     console.log(2);
// }
// if ("0") {
//     console.log(3);//3
// }
// if (0) {
//     console.log(4);
// }
// if ({}) {
//     console.log(5);//5
// }
var a = {};
var b = false;
var c = a || b;
console.log(typeof c);//object
