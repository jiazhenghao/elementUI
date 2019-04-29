/**
 * Q5
 */
function pipe(...arg) {
    let len = arg.length;
    let val = arg[0];
    for (let i = 1; i < len; i++) {
        val = (arg[i]).call(window, val);
    }
    return val;
}
pipe("5a0", parseInt, console.log);//5
