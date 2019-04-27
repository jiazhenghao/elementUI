function test() {
    var a = 7;
    return function() {
        console.log(a);
    }
}

test()();

function test2() {
    var a = 7;
    return function() {
        return a + 14;
    }
}
console.log(test2()());//21

function test3() {
    var a = 7;
    return function(a) {
        return this.a + 14;
    }
}
console.log(test3()(1));//NaN

function test4() {
    var a = 7;
    return function(a) {
        return a + 14;
    }
}
console.log(test4()(1));//15

function test5() {
    var a = 7;
    return function(a) {
        return this.a + 14;
    }
}
var a = -14;
console.log(test5()(2019));//0