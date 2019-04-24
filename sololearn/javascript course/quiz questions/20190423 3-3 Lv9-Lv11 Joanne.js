/**
 * Q2
 * 太阴险，注意那个空格
 */
var count = 0;
for (let ch of "ab cd ") {
    count++;
    console.log(ch);
}
console.log(count);//6

/**
 * Q4
 */
//var a = 1 == "1" ?return 1 : return 2; //Unexpected token return
//console.log(a);
var a = 1 == "1" ? 1:2;
console.log(a);//1
console.log(2 == "2");//true