function additiveHash(input) {
    let sum = 0;
    for (const value of input) {
        //console.log(value);
        sum += value.charCodeAt();
    }
    return sum;
}

const sum = additiveHash("foo");
console.log(sum);