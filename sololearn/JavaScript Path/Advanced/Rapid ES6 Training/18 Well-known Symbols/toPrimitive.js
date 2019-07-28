let values = [8,12,16];
values[Symbol.toPrimitive] = function(hint) {
    console.log(hint);
    return 42;
};
let sum = values + 100;
console.log(sum);
// default 
// 142 
