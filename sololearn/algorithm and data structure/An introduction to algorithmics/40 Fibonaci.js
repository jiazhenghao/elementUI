function fibonaci(n) {
    var arr = [1 , 1, 2];
    switch (n) {
        case 1: return 1;break;
        case 2: return 1; break;
        case 3: return 2; break;
        default: break;
    }
    var i = 3;
    while (i < n) {
        let temp = arr[2];
        arr[2] = arr[2] + arr[1];
        arr[0] = arr[1];
        arr[1] = temp;
        i++;
    }
    return arr[2];
}
for (let i = 1; i <= 80; i++) {
    console.log(fibonaci(i));
}

