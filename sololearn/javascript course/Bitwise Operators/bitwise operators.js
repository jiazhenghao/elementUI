console.log(5 & 13); // 0101 & 1101 = 0101
// expected output: 5;

console.log(parseInt("0101",2) & parseInt("1101",2));
// expected output: 5;

console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001
// expected output: 1;

console.log(5 | 13); // 0101 | 1101 = 1101
// expected output: 13

/** 
Operator	Usage	Description
Bitwise AND	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
Bitwise OR	a | b	Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
Bitwise XOR	a ^ b	Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
Bitwise NOT	~ a	Inverts the bits of its operand.
Left shift	a << b	Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
Sign-propagating right shift	a >> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
Zero-fill right shift	a >>> b  	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left.
*/

console.log(5 ^ 13);//8 只有当两个值不同，0，1或者1，0才是1，如果00，11，都是0

console.log(9 << 2);//36
console.log(9 >> 2);//2
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
