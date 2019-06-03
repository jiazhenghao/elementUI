/**
 * 
 * To test whether Set and Map is enumerated in Order 
 * because hashtable hashset, the sequence is not guaranteed
 */

let set = new Set();
for (let i = 0; i < 10; i++) {
    set.add(i);
}
for (const value of set) {
    console.log(value);//0123456789 in order!
}

let map = new Map();
for (let i = 0; i < 10; i++) {
    map.set(i, 'hi' + i);
}
for (const [key,value] of map) {
    console.log(key + ' : ' + value);
}
/* in order
0 : hi0
1 : hi1
2 : hi2
3 : hi3
4 : hi4
5 : hi5
6 : hi6
7 : hi7
8 : hi8
9 : hi9
*/
