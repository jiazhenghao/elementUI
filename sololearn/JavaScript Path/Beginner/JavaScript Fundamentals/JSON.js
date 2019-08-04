/*
parse to Json
*/
let obj = {
    id: 123,
    name: "jiazhenghao"
};
console.log(JSON.stringify(obj));//{"id":123,"name":"jiazhenghao"}
let arr = [
    'a', 'b', 'c'
];
console.log(JSON.stringify(arr));//["a","b","c"]
arr = [
    {carId: 123},
    {carId: 456},
    {carId: 789}
];
console.log(JSON.stringify(arr));//[{"carId":123},{"carId":456},{"carId":789}]
/*
Parsing JSON
*/
let json = `
    [
        {"carId":123},
        {"carId":456},
        {"carId":789}
    ]
`;
let carids = JSON.parse(json);
console.log(carids);//[ { carId: 123 }, { carId: 456 }, { carId: 789 } ]
let jsonobj = `{"id":123,"name":"jiazhenghao"}`;
console.log(JSON.parse(jsonobj));// { id: 123, name: 'jiazhenghao' }

