//  Q3
//  javascript 自执行函数
//  (function () { /* code */ }());   推荐使用这个
//  (function () { /* code */ })();   但是这个也是可以用的

var x = 5;
var x = (function (){
    var x = 0;
    return function () {
        return ++x;
    }();
}());
console.log(x);//1
