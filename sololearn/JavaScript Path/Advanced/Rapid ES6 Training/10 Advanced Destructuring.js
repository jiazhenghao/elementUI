try {
    let [high, low, ] = undefined;
} catch (e) {
    console.log(e.name);//TypeError
}

let count = 0;
for (let [a, b] of [[1,2],[3,4]]) {
    console.log(`${a},${b}`);
    count++;
}
console.log(count);
// 1,2
// 3,4
// 2

