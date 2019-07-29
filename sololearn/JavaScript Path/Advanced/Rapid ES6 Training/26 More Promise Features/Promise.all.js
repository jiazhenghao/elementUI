function pr1() {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('nice');
        }, 1000);
    });
    return p;
}

function pr2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('sucks');
        }, 2000);
    });
    return p;
}
let p1 = new pr1();
let p2 = new pr2();

Promise.all([p1, p2]).then(
    value => console.log('OK') + value,
    value => console.log('shit') + value,
);
//shit



