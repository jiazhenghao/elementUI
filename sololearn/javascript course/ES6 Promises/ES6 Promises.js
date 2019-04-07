//To see an example
// setTimeout(function() {
//     console.log("Work 1");
//     setTimeout(function(){
//         console.log("Work 2");
//     },1000);
// }, 1000);
// console.log("End");
/*
    ES6 comes to the rescue, A Promise can be created as follows:
    new Promise(function(resolve, reject){
        if(success) 
            resolve(result);
        else
            reject(Error("failure"));
    });
    If a method returns a promise, its calls should use the then method
    which takes two methods as input; one for success and the other for failure
*/
function asyncFunc(work) {
    return new Promise(function (resolve, reject) {
        if (work === '')
            reject(Error("Nothing need to do"));
        else {
            setTimeout(function () {
                resolve(work);
            }, 1000);
        }
    });
}
// asyncFunc("Work first").then(function (result) {
//     console.log(result);
//     return asyncFunc("Work second");
// }, function (error) {
//     console.log(error);
// }).then(function (result) {
//     console.log(result);
// }, function (error) {
//     console.log(error);
// });
// console.log("End");
//End, 1s Work first, 1s Work second
// asyncFunc("").then(function (result) {
//     console.log(result);
//     return asyncFunc("Work second");
// }, function (error) {
//     console.log(error);
// }).then(function (result) {
//     console.log(result);
// }, function (error) {
//     console.log(error);
// });
//Error: Nothing need to do
//undefined
asyncFunc("Work first").then(function (result) {
    console.log(result);
    return asyncFunc("");
}, function (error) {
    console.log(error);
}).then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});
//Work first, at the same time Error: Nothing need to do