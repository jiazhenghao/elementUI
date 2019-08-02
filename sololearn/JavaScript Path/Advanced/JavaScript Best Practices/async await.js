function asyncMethod(message, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message + ' ' + num);
            resolve(++num);
        }, 600);
    });
}
async function main() {
    let one = await asyncMethod("open DB connection", 0);
    let two = await asyncMethod("find user", one);
    let three = await asyncMethod("validate user", two);
    await asyncMethod("do something", three);
}

main();