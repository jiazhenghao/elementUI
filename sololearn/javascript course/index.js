// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);//2
//     }
//     console.log(x);//2
// }

// function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x);//2
//     }
//     console.log(x);//1
// }

// varTest();
// letTest();

//The best use of Keyword let
// for (let i = 0; i < 3; i++) {
//     document.write(i);
// }

/*
let is not subject to Variable Hoisting, which means that 
let declarations do not move to the top of the current execution context.
a good example below:
*/

var foo1 = 'foo1';
var foo2 = 'foo2Outer';

function exampleFunc() {
    console.log(foo1); // foo1变量 foo1 在函数中并没有声明，所以这里只涉及变量寻值的问题，所以取值就是全局变量 foo1。

    console.log(foo2); // undefined
    console.log(bar); // undefined
    /*
    这两个变量按上面函数被调用的步骤所示，在运行函数体之前两个变量已经生成，去操作并不会产生运行时错误。
    又由于运行 console 的时候还没有运行到下方 var xxx = yyy 的赋值语句，所以此时打印出来的是 undefined。
    （对！你没有想错，当运行函数体时，var xxx = yyy 其实已经变成单纯的赋值语句了。）
    */

    console.log(varFunc); // undefined
    console.log(expFunc); // function expFunc() {alert( 'second' )}
    //https://www.jianshu.com/p/852b983e0743具体原因详解在这里
    var foo2 = 'foo2Inner'
    var bar = 'bar';
    var varFunc = function () {
        alert('varFunc');
    }
    var expFunc;//有没有这个声明，expFunc都是一个函数了。
    function expFunc() {
        alert('first');
    }
    function expFunc() {
        alert('second');
    };//第二个覆盖第一个 

    //console.log(localVarUndefined);
    // Firefox -> ReferenceError: can't access lexical declaration `localVarUndefined' before initialization
    // Chrome -> Uncaught ReferenceError: localVarUndefined is not defined
    //console.log(localVar);
    // Firefox -> ReferenceError: can't access lexical declaration `localVar' before initialization
    // Chrome -> Uncaught ReferenceError: localVar is not defined

    /* ----- let declared variable ---- */
    let localVarUndefined;
    let localVar = 'localVar';
    console.log(localVarUndefined); // undefined
    console.log(localVar); // localVar
    /*
    但是 ES6 中加入了 let 局部变量的声明，它的行为就和 var 声明不同了，那我们来看下区别在哪里？
    其实 exampleFunc 函数被调用后发生的步骤一点都没有变化，依然会在函数体运行前进行变量的搜寻和创建。
    但是当遇到 let 声明的变量，规范规定在这个变量创建后是无法获取到的，直到 LexicalBinding 阶段。
    那什么是 LexicalBinding 阶段呢？就是函数体运行到 let xxx [= yyy]; 这条语句时。
    换句话说就是当函数开始执行，然后逐行运行到 let 声明（或者外加赋值）语句前，let 声明的变量虽然被创建了，
    但是程序获取不到，所以就会抛出 ReferenceError。这段无法获取变量的阶段称之为 TDZ（Temporal Dead Zone）。
    如此就能解释 localVarUndefined，localVar 的打印结果了。
    */
}

//exampleFunc();

// const a = "Hello";
// a = "Bye";
// console.log(a);//index.js:89 Uncaught TypeError: Assignment to constant variable. at index.js:89

//const variables have the same scope as let
// const a = "Hello";
// function halo() {
//     console.log(a);//Uncaught ReferenceError: a is not defined
//     const a = "World";
//     console.log(a);
// }
// halo();//World
// console.log(a);//Hello

/* 
template literals are enclosed by the backtick `` instead of double or single quotes
The ${expression} is a placeholder, can include any expression, which will get inserted or evaluated into 
the template literals
*/
// function templateLiterals() {
//     let a = 8;
//     let b = 4;
//     let msg = `The sum is ${a + b}`;
//     console.log(msg);
// }
// templateLiterals();//The sum is 12

//for in loops
// let obj = {a : 1, b : 2, c : 3};
// for (let v in obj) {
//     console.log(v);//a,b,c
//     console.log(obj[v]);//1,2,3
//     console.log(obj.v);//undefined
// }
//for of loops
// let list = ["x", "y", "z"];
// for (let val of list) {
//     console.log(val);//x,y,z
// }
// for (let ch of "Hello") {
//     console.log(ch);//H,e,l,l,o
// }
// function add(x, y) {
//     var sum = x + y;
//     console.log(sum);
// }
// //ES6 introduces a new syntax for writing functions.
// const add = (x, y) => {
//     let sum = x + y;
//     console.log(sum);
// }
// //This new syntax can be quite handy when you just need a simple function with one argument.
// const greet = x => "Welcome" + x;
// //no parameters
// const x = () => alert("hi");

// var arr = [1,3,5,7,9];
// arr.forEach(function(el){
//     console.log(el * 2);
// });
// const arr2 = [2,4,6,8,10];
// arr2.forEach(v => {
//     console.log(v * 2);
// });
// const printOdds = (arr) => {
//     arr.forEach(el => {
//         if (el % 2 == 0) {
//             console.log(el);
//         }
//     })
// }
// const arr3 = [1,2,3,4,5,6,7,8];
// printOdds(arr3);

// //default parameters
// const test = (a, b =3, c = 19) => {
//     return a + b + c;
// }
// console.log(test(1));//23

//In es6, method can be in shorthand, no function, no :
// let tree = {
//     height: 10,
//     color: 'green',
//     grow() {
//         this.height += 2;
//     }
// }
// tree.grow();
// console.log(tree.height);

/*
object in es6, can be simplified in this way, but remember number only duplicate, not pointed to 
the actual memory address
*/
// let height = 5;
// let health = 100;
// let athlete = {
//     height,
//     health
// }
// console.log(athlete.health);//100
// health = 50;
// console.log(athlete.health);//100

//array or object is otherwise
// let arr = [1,2,3];
// let obj = {x:1,y:2};
// let combine = {
//     arr,
//     obj
// }
// console.log(combine.arr[1]);//2
// console.log(combine.obj.x);//1
// arr.shift();
// console.log(arr);//2,3
// console.log(combine.arr[1]);//3 not 2 ^-^
// obj.x = 0;
// console.log(combine.obj.x)//0 the same reason of arr

//computed property in es6
//example 1:
// let prop = 'name';
// let id = '1234';
// let mobile = '15821881560';
// let user = {
//     [prop]: 'Jay Jarsper',
//     [`user_${id}`]: `${mobile}`
// }
// console.log(user);//{name: "Jay Jarsper", user_1234: "15821881560"}
// mobile = '13917797109';
// console.log(user);//{name: "Jay Jarsper", user_1234: "15821881560"}
// let user2 = {
//     [prop]: 'Jay Jarsper',
//     [`user_${id}`]: mobile
// }
// console.log(user2);//{name: "Jay Jarsper", user_1234: "13917797109"}
// mobile = '13801788256';
// console.log(user2);//{name: "Jay Jarsper", user_1234: "13917797109"}
//example 2:
// var i = 0;
// var a = {
//     ['foo' + ++i]: i,
//     ['foo' + ++i]: i,
//     ['foo' + ++i]: i
// }
// console.log(a);//{foo1: 1, foo2: 2, foo3: 3}
// i = 0;
// var b = {
//     ['foo' + i++]: i,
//     ['foo' + i++]: i,
//     ['foo' + i++]: i
// }
// console.log(b);//{foo0: 1, foo1: 2, foo2: 3}
// //example 3:
// var param = 'size';
// var config = {
//     [param]: 12,
//     ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
// }
// console.log(config);//{size: 12, mobileSize: 4}

/*
    ES6 provides a new method for Object, which is assign()
    This is useful for creating a new object by combining several existing sources
    Also helpful as creating a duplicate of an existing object
*/
//exapmle 1:
// let person = {
//     name: 'Jack',
//     age: 18,
//     sex: 'male'
// };
// let student = {
//     name: 'Bob',
//     age: 20,
//     xp: '2'
// }
// let newStudent = Object.assign({}, person, student);
// console.log(newStudent);//{name: "Bob", age: 20, sex: "male", xp: "2"}
//As we can see, the third parameter overrides the second parameter, thus sequence is important 

//example 2:
/*
    Basic knowledge in C, C++ or Java, helps us understand the reference of an object.
    So, just create another variable cannot duplicate a new object, because no new memory address is created.
    To avoid changing original object with the change of the new variable, we use assign()
*/
// let person = {
//     name: 'Jack',
//     age: 18,
//     sex: 'male'
// };
// let newPerson = Object.assign({}, person);
// person.name = 'Simon';
// console.log(person);//{name: "Simon", age: 18, sex: "male"}
// console.log(newPerson);//{name: "Jack", age: 18, sex: "male"}

//example 3:
// let person = {
//     name: 'Jack',
//     age: 18,
//     sex: 'male'
// };
// let newPerson = Object.assign({}, person, { name: 'Peter' });
// console.log(newPerson);//{name: "Peter", age: 18, sex: "male"}

// let a = 1;
// let b = 2;
// console.log(a, b);//1 2

/*
    A frozen object can no longer be changed; 
    freezing an object prevents new properties from being added to it, 
    existing properties from being removed, prevents changing the enumerability, 
    configurability, or writability of existing properties, 
    and prevents the values of existing properties from being changed.
*/
// let obj1 = {
//     x: 1,
//     y: 2
// }
// let obj2 = Object.freeze(obj1);
// obj2.x = 3;
// console.log(obj2);//

/*
    Object.seal() method seals an object, preventing new properties from being added to it and 
    marking all existing properties as non-configurable. 
    Values of present properties can still be changed as long as they are writable.
*/
// let object1 = {
//     property1: 42
// };
// Object.seal(object1);
// object1.property1 = 33;
// console.log(object1.property1);// 33
// delete object1.property1; // cannot delete when sealed
// console.log(object1.property1);// expected output: 33

//array destructuring in ES6
// let arr = ['1', '2', '3'];
// let [one, two, three] = arr;
// console.log(one);//1
// console.log(two);//2
// console.log(three);//3
//we can also destructure an array returned by a function
// let a = () => {
//     return [1, 3, 2];
// };
// let [one, , two] = a();
// console.log(one);//1
// console.log(two);//2
//example 1;
// let a, b, c = 4, d = 8;
// [a, b = 6] = [2]; // a = 2, b = 6
// [c, d] = [d, c];  // c = 8, d = 4
// console.log(a, b, c, d);

//Object Destructuring in ES6
// let obj = { h: 100, s: true };
// let { h, s } = obj;
// console.log(h);//100
// console.log(s);//true
// let {a, b} = {a:'hello', b:' world'};
// console.log(a + b);//hello world
//({a, b} = {a:'hello', b:' world'}); console.log(a + b); //hello world
//you can assign default values in case the value unpacked from the Object is undefined
// let obj = { id: 42, name: 'Jack' };
// let { id = 10, age = 19 } = obj;
// console.log(id);//42
// console.log(age);//19
//another example
// let obj = { h: 42, s: true };
// let { h: foo, s: bar } = obj;
// console.log(foo);//42
// console.log(bar);//true
// console.log(s);//Uncaught ReferenceError: s is not defined

// function containsAll(arr) {
//     for (let k = 1; k < arguments.length; k++) {
//         let num = arguments[k];
//         if (arr.indexOf(num) === -1) {
//             return false;
//         }
//     }
//     return true;
// }
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(containsAll(x, 2, 4, 7));//true
// console.log(containsAll(x, "2", 4, 3));//false
// console.log(containsAll(x, 1, 2, 3, 10));//false
//ES6 provides Rest parameter   ... is called Spread operator
// function containsAllES6(arr, ...nums) {
//     for (let v of nums) {
//         if (arr.indexOf(v) === -1) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(containsAllES6(x, 2, 4, 7));//true
// console.log(containsAllES6(x, "2", 4, 3));//false
// console.log(containsAllES6(x, 1, 2, 3, 10));//false
//If there are no extra arguments, the rest parameter will simply be an empty array.
//which means the rest parameter will never be undefined.

//It is common to pass the elements of an array as arguments to a function.
//before es6, we used the following method;
// function addAll(w, x, y, z) {
//     console.log(w + x + y + z);
// }
// var arr = [1, 2, 3];
// addAll.apply(null, arr.concat(4));
//Function.prototype.apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//concat do not change the original two arrays.just return a new one.
//es6 provides an easier way to do the example above with Spread operators.
// const addAllES6 = (w, x, y, z) => {
//     console.log(w + x + y + z);
// };
// let args = [1, 2, 3];
// addAllES6(...args, 4);

// Spread in array literals
// var arr = ["one", "two", "five"];
// arr.splice(2, 0, "three");
// arr.splice(3, 0, "four");
// console.log(arr);//["one", "two", "three", "four", "five"]
// //using Spread
// let newArr = ["three", "four"];
// let arrES6 = ["one", "two", ...newArr, "five"];
// console.log(arrES6);//["one", "two", "three", "four", "five"]

//Spread in object literals
