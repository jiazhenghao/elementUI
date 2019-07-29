function doAsync() {
    let p = new Promise(function(resolve, reject) {
        console.log('in Promise code');
        setTimeout(function() {
            resolve(getAnotherPromise());
        }, 1000);
    });
    return p;
}

function getAnotherPromise() {
    let p = new Promise(function (resolve, reject) {
        console.log('another promise');
        setTimeout(function () {
            reject('another promise failed');
        }, 1000);
    });
    return p;
}

doAsync().then(function() {console.log('OK')},
                function() {console.log('Nope')});
// in Promise code
// another promise
// Nope
