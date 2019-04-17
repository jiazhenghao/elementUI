/**
 * Q4
 * 对于map来说，如果key一样，后面的set，就会覆盖原来前面的。
 */
let map = new Map([['a','1'],['a',1],['a','2']]);
console.log(map.size);//1
console.log(map);//Map(1) {"a" => "2"}

