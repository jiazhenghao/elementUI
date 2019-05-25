// 192:~ jiazhenghao$ which node
// /usr/local/bin/node
// 192:~ jiazhenghao$ which npm
// /usr/local/bin/npm
// 192:~ jiazhenghao$ which npx
// /usr/local/bin/npx
// 192:~ jiazhenghao$ node
//(async(a=1,...b) => ({...b,a,[a]:`${a}`}))()
// Promise {
//     { '1': '1', a: 1 },
//     domain:
//      Domain {
//        domain: null,
//        _events:
//         [Object: null prototype] {
//           removeListener: [Function: updateExceptionCapture],
//           newListener: [Function: updateExceptionCapture],
//           error: [Function: debugDomainError] },
//        _eventsCount: 3,
//        _maxListeners: undefined,
//        members: [] } }
// > util.promisify
// [Function: promisify] { custom: Symbol(util.promisify.custom) }
// > require('fs').promises
// {
//   access: [AsyncFunction: access],
//   copyFile: [AsyncFunction: copyFile],
//   open: [AsyncFunction: open],
//   rename: [AsyncFunction: rename],
//   truncate: [AsyncFunction: truncate],
//   rmdir: [AsyncFunction: rmdir],
//   mkdir: [AsyncFunction: mkdir],
//   readdir: [AsyncFunction: readdir],
//   readlink: [AsyncFunction: readlink],
//   symlink: [AsyncFunction: symlink],
//   lstat: [AsyncFunction: lstat],
//   stat: [AsyncFunction: stat],
//   link: [AsyncFunction: link],
//   unlink: [AsyncFunction: unlink],
//   chmod: [AsyncFunction: chmod],
//   lchmod: [AsyncFunction: lchmod],
//   lchown: [AsyncFunction: lchown],
//   chown: [AsyncFunction: chown],
//   utimes: [AsyncFunction: utimes],
//   realpath: [AsyncFunction: realpath],
//   mkdtemp: [AsyncFunction: mkdtemp],
//   writeFile: [AsyncFunction: writeFile],
//   appendFile: [AsyncFunction: appendFile],
//   readFile: [AsyncFunction: readFile]
// }
//.exit退出
//如果有了n模块，可以直接用n latest升级到最新的node版本
//如果是homebrew，直接brew upgrade node

