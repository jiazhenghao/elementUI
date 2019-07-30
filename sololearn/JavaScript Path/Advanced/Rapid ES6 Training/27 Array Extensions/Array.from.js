console.log(Array.from([1, 2, 3], x => x + x));
// [2, 4, 6]
console.log(Array.from({ length: 5 }, (v, i) => i));
// [0, 1, 2, 3, 4]
let amounts = [800, 810, 820];
let salaries = Array.from(amounts, function (v) {
    return v + this.adjustment;
}, { adjustment: 50 });
console.log(salaries);//[ 850, 860, 870 ]
//注意不能用箭头函数，因为不能绑定this
