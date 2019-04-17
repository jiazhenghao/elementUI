/**
 * Q4
 */
var str = "Solo!!learn!";
str = str.split("!");
//console.log(str);//0: "Solo" 1: "" 2: "learn" 3: ""
output = (...str) => {
    console.log(str[2] + str.length);
}
output(...str);//learn4
