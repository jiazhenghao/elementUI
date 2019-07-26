function test(arr) {
    arr[0] = -1;
}

var arr = [1,2,3,4,5];
test(arr);
console.log(arr);