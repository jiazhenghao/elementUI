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

exampleFunc();

