function doAsync() {
    let p = new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            reject('Connecting to Database failure');
        }, 1500);
    });
    return p;
}
doAsync().catch(function (reason) {
    console.log(reason);
});
//in promise code
//Connecting to Database failure