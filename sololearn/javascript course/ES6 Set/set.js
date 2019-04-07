/*
    A Set object can be used to hold unique values(no repetitions are allowed)
    new Set
    size
    NaN and undefined can also be stored in Set
*/
//Methods: add(value);delete(value);has(value);clear();values()
let set = new Set([1,76,23,542,90]);
set.add(5).add(99);
console.log(set.has(88));//false
console.log(set.has(76));//true
for (let v of set.values()) {
    console.log(v);
}//1 76 23 542 90 5 99

