let values = [8,12,16];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));
//[ [ 8, 12, 16, [Symbol(Symbol.isConcatSpreadable)]: false ] ]


