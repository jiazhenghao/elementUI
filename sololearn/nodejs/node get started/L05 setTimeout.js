// const rocks = who => {
//     console.log(who + ' rocks!');
// };
// setTimeout(rocks, 2000, "Plu");
//Plu rocks!

// const hello = () => {
//     console.log("Hello after 4 seconds");
//     setTimeout(() => {
//         console.log("Hello after 8 seconds");
//     }, 4000);
// };
// setTimeout(hello, 4000);

// Print "Hello World"
// Every second
// And stop after 5 times
// After 5 times. Print "Done" and let Node exit.

// var limit = 1;
// const hello = () => {
//     if (limit > 5) {
//         clearInterval(helloWolrdFive);
//         console.log("Done");
//     }
//     else {
//         console.log("Hello Wolrd"); 
//         limit++;
//     }
// }
// var helloWolrdFive = setInterval(hello, 1000);

//利用循环来写
// const hello = (i) => {
//     console.log("Hello world. " + i);
//     i++;
//     setTimeout(hello, i*1000, i);
// }
// setTimeout(hello, 1000, 1);

var count = 1;
const hello = () => {
    if (count % 5 == 0) {
        console.log("Hello world. " + ((count - count % 5) / 5 + 1) * 100);
        clearInterval(interval);
        interval = setInterval(hello, 100 * count / 5 + 100);
        count++;
    }
    else {
        console.log("Hello world. " + ((count - count % 5) / 5 + 1) * 100);
        count++;
    }
}
var interval = setInterval(hello, 100);