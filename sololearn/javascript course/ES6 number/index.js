// 数值的表示
// 二进制表示法新写法: 前缀 0b 或 0B 。

// console.log(0b11 === 3); // true
// console.log(0B11 === 3); // true
// 八进制表示法新写法: 前缀 0o 或 0O 。

// console.log(0o11 === 9); // true
// console.log(0O11 === 9); // true

// 常量
// Number.EPSILON
// Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。
// 它的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。
// 测试数值是否在误差范围内:
// 0.1 + 0.2 === 0.3; // false
// // 在误差范围内即视为相等
// equal = (Math.abs(0.1 - 0.3 + 0.2) < Number.EPSILON); // true
// 属性特性
// writable：false
// enumerable：false
// configurable：false

// 最大/最小安全整数
// 安全整数
// 安全整数表示在 JavaScript 中能够精确表示的整数，安全整数的范围在 2 的 -53 次方到 2 的 53 次方之间（不包括两个端点），超过这个范围的整数无法精确表示。
// 最大安全整数
// 安全整数范围的上限，即 2 的 53 次方减 1 。
// Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true
// Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1;     // false
// Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2; // false
// 最小安全整数
// 安全整数范围的下限，即 2 的 53 次方减 1 的负数。
// Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2; // false
// Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1;     // false
// Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; //false
// 属性特性
// writable：false
// enumerable：false
// configurable：false

// 方法
// Number 对象新方法

// Number.isFinite()
// 用于检查一个数值是否为有限的（ finite ），即不是 Infinity

// console.log( Number.isFinite(1));   // true
// console.log( Number.isFinite(0.1)); // true
 
// // NaN 不是有限的
// console.log( Number.isFinite(NaN)); // false
 
// console.log( Number.isFinite(Infinity));  // false
// console.log( Number.isFinite(-Infinity)); // false
 
// // Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
// console.log( Number.isFinite('foo')); // false
// console.log( Number.isFinite('15'));  // false
// console.log( Number.isFinite(true));  // false
// Number.isNaN()
// 用于检查一个值是否为 NaN 。
// console.log(Number.isNaN(NaN));      // true
// console.log(Number.isNaN('true'/0)); // true
 
// // 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// // 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
// Number.isNaN("NaN");      // false
// Number.isNaN(undefined);  // false
// Number.isNaN({});         // false
// Number.isNaN("true");     // false
// 从全局移植到 Number 对象的方法

// 逐步减少全局方法，用于全局变量的模块化。

// 方法的行为没有发生改变。

// console.log(Number.isInteger(true));//false
// // JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
// Number.isInteger(1);   // true
// Number.isInteger(1.0); // true
// Math.hypot
// 用于计算所有参数的平方和的平方根。