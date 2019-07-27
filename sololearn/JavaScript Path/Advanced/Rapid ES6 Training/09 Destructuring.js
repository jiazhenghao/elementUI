// function reviewSalary([low, average], high = '88000') {
//     console.log(average);
// }
// reviewSalary(['32000', '56000']);//56000

// let salary = {
//     low: '32000',
//     average: '51000',
//     high: '75600'
// };
// let { low: newLow, average: newAverage, high: newHigh } = salary;
// console.log(newHigh);//75600

let salary = {
    low: '32000',
    average: '51000',
    high: '75600'
};
let newLow, newAverage, newHigh;
({ low: newLow, average: newAverage, high: newHigh } = salary);
console.log(newHigh);//75600

let [max, min] = 'AZ';
console.log(max, min);// A Z
