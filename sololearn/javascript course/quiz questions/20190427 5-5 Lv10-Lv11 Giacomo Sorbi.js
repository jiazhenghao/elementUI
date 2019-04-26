/**
 * Q4
 * entries()
 * (method) Map<any, any>.entries(): IterableIterator<[any, any]>
    Returns an iterable of key, value pairs for every entry in the map.
 */
let map = new Map();
map.set('k1', '1').set('k2', '2');
map.get('k1');
for (let kv of map.entries()) {
    console.log(kv[0]);//k1 k2
    console.log(kv[1]);//1  2
}