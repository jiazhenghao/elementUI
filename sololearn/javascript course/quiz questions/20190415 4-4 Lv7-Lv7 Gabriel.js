/**
 * Q3
 * What is the output of the following code?
 * Promise.all(iterable)
        Returns a promise that 
        either fulfills when all of the promises in the iterable argument have fulfilled 
        or rejects as soon as one of the promises in the iterable argument rejects.
 */
const a = new Promise((res, rej) => {
    setTimeout(() => res('foo'), 300);
});
const b = new Promise((res, rej) => {
    setInterval(() => rej('bar'), 100);
    res('car');
});
Promise.all([a,b]).then((race)=>{
    console.log(race);
}).catch((crash) => {
    console.log(crash);
});
//['foo','car']
//['bar','car']