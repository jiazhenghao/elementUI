// const fs = require('fs');
// const data = fs.readFileSync(__filename);//读的就是自己
// console.log('File data is', data);
// console.log(data.length);
// console.log('TEST');
// 上面是同步，下面是异步
// const fs = require('fs');
// fs.readFile(__filename, function cb(err, data) {
//   console.log('File data is', data);
// });
// console.log('TEST');
//如果既要读又要写，就要nesting嵌套使用移步处理，于是引入了Promise
// const fs = require('fs');
// const util = require('util');
// const readFile = util.promisify(fs.readFile);
// async function main() {
//     console.log("Before test");//最先执行
//     const data = await readFile(__filename);
//     console.log('File data is', data);
// }
// main();
// console.log('TEST');
//再简单一些，就用ES6的destructuring
const { readFile } = require('fs').promises;
async function main() {
    console.log("Before test");//最先执行
    const data = await readFile(__filename);
    console.log('File data is', data);
}
main();
console.log('TEST');