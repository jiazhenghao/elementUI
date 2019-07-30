let salaries = [600, 700, 1800, 850, 900];
let result = salaries.findIndex(function(value, index, array){
    return value > this;
}, 700);
salaries.fill(900, 1);
console.log(result);// 2

