function doAsync() {
    let p = new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('resolving...');
            resolve('OK');
        }, 1500);
    });
    return p;
}
doAsync().then(function(value) {
    console.log('Fulfilled! ' + value);
    return 'For sure';
}).then(function(value) {
    console.log('Really! ' + value);
});
// in promise code
// resolving...
// Fulfilled! OK
// Really! For sure

