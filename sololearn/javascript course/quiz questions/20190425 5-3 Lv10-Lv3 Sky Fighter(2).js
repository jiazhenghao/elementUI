/**
 * Q1
 */
function* g() {
    yield 1;
}
for (let i of g()) {
    console.log(i);
}
console.log(typeof g());//object
console.log(g());//g {<suspended>}
