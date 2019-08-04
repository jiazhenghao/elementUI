/*
forEach
*/
let arr = [
    'a','b','c'
];
arr.forEach((val, idx) => {
    console.log(`${val} + ${idx}`);
// a + 0
// b + 1
// c + 2
});

/*
filter
*/
let newArr = arr.filter(val => {
    return val > 'a';
});
console.log(newArr);//[ 'b', 'c' ]

/*
every
*/
let result = arr.every(val => {
    return val > 'Z';
});
console.log(result);//true

/*
find
*/
let find = arr.find(val => {
    return val > 'a';
});
console.log(find);//b 

