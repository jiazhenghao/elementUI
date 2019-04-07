/**
 * Before ES6, the following syntax was the correct way to repeat a string multiple times;
 */
console.log(Array(3 + 1).join("foo"));//foofoofoo
console.log(Array(3).join("foo"));//foofoo
console.log(Array(4).join("foo"));//foofoofoo
//With the new syntax, it becomes:
console.log("foo".repeat(3));//foofoofoo

/**
 * Searching Strings
 * Before, we only used the indexOf() method to find the position of the text in the String
 */
console.log("Sololearn".indexOf("Solo") === 0);//true;
console.log("Sololearn".indexOf("Solo") === (4 - "Solo".length));//true;
console.log("Sololearn".indexOf("lol"));//2
console.log("Sololearn".indexOf("lol", 2));//2
console.log("Sololearn".indexOf("lol", 3));//-1
//ES6 has replaced this with a version with following methods
console.log("Sololearn".startsWith("Solo", 0));//true
console.log("Sololearn".endsWith("Solo", 3));//false
console.log("Sololearn".endsWith("Solo", 4));//true
console.log("Sololearn".endsWith("Solo", 5));//false
console.log("Sololearn".endsWith("lo", 4));//true
console.log("Sololearn".endsWith("n"));//true
console.log("Sololearn".endsWith("ar"));//false
console.log("Sololearn".endsWith("ar", 8));//true
console.log("Sololearn".includes("lole"));//true
console.log("Sololearn".includes("olo", 1));//true
console.log("Sololearn".includes("olo", 2));//false

