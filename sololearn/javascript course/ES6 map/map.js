/*
    A map object can be used to hold key/value pairs.
*/
let map = new Map();
map.set('k1', 'v1').set('k2', 'v2').set('k3', 'v3').set('k4', 'v4');
console.log(map.get('k1'));//v1
console.log(map.has('k2'));//true
console.log(map.size);//4
for (let kv of map.entries()) {
    console.log(kv[0] + " : " + kv[1]);
}
/*
    k1 : v1
    k2 : v2
    k3 : v3
    k4 : v4
    entries() returns an Iterator of array[key, value] in the map for each element.
*/
for (let k of map.keys()) {
    console.log(k + ' ' + map.get(k));
}//k1 v1 ...
for (let v of map.values()) {
    console.log(v);
}//v1 v2 v3 v4
//other methods
/*
    delete(key);
    clear();
*/

