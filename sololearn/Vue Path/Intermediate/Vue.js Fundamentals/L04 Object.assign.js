// The Object.assign() method is used to copy the values of all 
// enumerable own properties from one or more source objects to 
// a target object.It will return the target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

//console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
obj.a = 2;
console.log(copy);// { a: 1 }
console.log(obj);// { a: 2 }
//一种深度拷贝