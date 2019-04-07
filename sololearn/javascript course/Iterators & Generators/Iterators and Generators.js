/*
    Generally, we use for ... of loops to do iterator for an object.
    Symbol.iterator is the default iterator
*/
/*
    generator function or gen function
    生成器函数是ES6的新特性之一，它是一个在执行时能中途暂时退出，后面重新调用又能重新进入继续执行的一种函数。
并且在函数内定义的变量的所有状态不受中途退出的影响。
    function* 函数名([参数1[, 参数2[, … 参数n]]]) { JS语句 }
    1） 调用生成器对象时会返回一个生成器的迭代器
    2） 该迭代器中有一个next()方法，它返回一个包含value和done的对象
    3） 每次调用next()方法遇到yied表达式位置暂停执行
    4） value表示yied表达式的返回值，done表示该生成器最后一个值是否已经产生
    5）如果给next()方法传递参数, 参数的值会代替yied表达式的返回值
    6)  如果在生成器中调用return，生成器将提前完成
    原文：https://blog.csdn.net/qq_21937107/article/details/81746237 

function* idMaker() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
let gen = idMaker();
console.log(gen);//idMaker {<suspended>}
console.log(gen.next().value);//0
console.log(gen.next().done);//false;
for (let k = 0; k < 3; k++) {
    let output = idMaker();
    console.log(gen.next().value + " " + gen.next().done);
}
//2 false
//4 true
//undefined true
*/

/*
    The example below shows how to use Symbol.iterator and generator function to create a new iterator

let myIterableObj = {
    [Symbol.iterator]: function* () {
        yield1;yield2;yield3;
    }
}
console.log([...myIterableObj]);
*/

const arr = ['0','1','4','a','9','c','16'];
const my_obj = {
    [Symbol.iterator]: function*() {
        for (let index of arr) {
            yield `${index}`;
        }
    }
};
const all = [...my_obj].map(i => parseInt(i, 10)).map(Math.sqrt).filter(i => i < 5).reduce((i, d) => i + d);
//console.log(all);//["0", "1", "4", "a", "9", "c", "16"]
//console.log(all);//[0, 1, 4, NaN, 9, NaN, 16]
//console.log(all);//[0, 1, 2, NaN, 3, NaN, 4]
//console.log(all);//[0, 1, 2, 3, 4]
console.log(all);//10;

