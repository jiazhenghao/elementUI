function doAsync() {
    let p = new Promise(function(resolve, reject) {
        console.log('in promise code');
        setTimeout(function() {
            console.log('resolving...');
            resolve();
        }, 1500);
    });
    return p;
}
let promise = doAsync();
// in promise code
// 1.5s
// resolving...
