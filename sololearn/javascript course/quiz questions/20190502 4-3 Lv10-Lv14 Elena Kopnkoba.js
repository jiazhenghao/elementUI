/**
 * Q3
 */
let myIterableObj = {
    [Symbol.iterator] : function* () {
        yield 5; yield 7; yield 9;
    }
};
console.log([...myIterableObj][1]);//7

/**
 * Q4
 */
let [learn, solo = "solo"] = "learn";
console.log(learn, solo);//l e
[solo, learn] = [learn, solo];
console.log(solo, learn);//l e
console.log(solo + learn);//le
