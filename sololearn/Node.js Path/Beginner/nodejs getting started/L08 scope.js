{
    // Block Scope
}

if (true) {
    // Block Scope
}

for (let i = 1; i <= 10; i++) {
    // Block Scope
}

function sum(a, b) {
    // Function Scope
    var result = a + b;
}

sum(4 + 3);

//Object.freeze();
//只能锁住object的第一层 
var obj = {
    x: {
        a: 2,
        b: 3
    },
    y: 1
}
Object.freeze(obj);
obj.x.a = 4;
console.log(obj);//{ x: { a: 4, b: 3 }, y: 1 }
obj.y = 2;//nothing happens
console.log(obj);//{ x: { a: 4, b: 3 }, y: 1 }
//如果要完全封锁所有的对象，推荐使用一个library called Immutable.js

