/**
 * Q4
 * 逗号运算符，优先级超级低，所以用括号，
 * 因为逗号运算符在赋值的更后面。
 * 
 */
var elem = (1, 2, 3, 3, 4, 6, 5);
console.log(elem);//5

var x;
x = 8 * 2, x * 4; /*整个表达式的值为64，x的值为16*/
console.log(x);//16

var y;
(y = 8 * 2, y * 4), y * 2 /*整个表达式的值为128，y的值为16*/
console.log(y);//16

var z;
x = (z = 5, 5 * 2) /*整个表达式为赋值表达式，它的值为10，z的值为5*/
console.log(z);//5
console.log(x);//10


x = z = 5, 5 * 2 /*整个表达式为逗号表达式，它的值为10，x和z的值都为5*/
console.log(x);//5
console.log(z);//5

/**
 * https://blog.csdn.net/wl110231/article/details/8162732
 * 详细描述了JavaScript的逗号运算符
 */