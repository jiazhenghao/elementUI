const { spawn } = require('child_process');

// Print Working Directory
const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);
/*
/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node get started
*/

// Read content of a file
const { HOME } = process.env;
const cat = spawn('cat', [`${HOME}/Downloads/elementUI/sololearn/nodejs/node get started/L27 Framework other than express.md`]);
cat.stdout.pipe(process.stdout);
/*
Koa https://koajs.com
next generation web framework for node.js
Sails https://sailsjs.com
METEOR  https://www.meteor.com
*/

// List files
//const ls = spawn('ls', ['-l', '.']);
//ls.stdout.pipe(process.stdout);
/*
total 512
-rw-r--r--  1 jiazhenghao  staff   1850  5 18 12:48 L01 test your node version.js
-rw-r--r--  1 jiazhenghao  staff    539  5 18 13:00 L02 REPL.js
-rw-r--r--  1 jiazhenghao  staff    347  5 18 13:09 L03 tab.js
-rw-r--r--  1 jiazhenghao  staff    193  5 18 13:42 L04 simpleHttpServer.js
-rw-r--r--  1 jiazhenghao  staff   1302  5 18 14:38 L05 setTimeout.js
-rw-r--r--  1 jiazhenghao  staff    918  5 18 15:16 L06 cli.js
-rw-r--r--  1 jiazhenghao  staff    136  5 18 15:15 L07 Wrap Up for modult 1.js
-rw-r--r--  1 jiazhenghao  staff    557  5 18 18:25 L08 scope.js
-rw-r--r--  1 jiazhenghao  staff    419  5 18 18:34 L09 arrow function.js
-rw-r--r--  1 jiazhenghao  staff    915  5 18 18:53 L10 destructuring.js
-rw-r--r--  1 jiazhenghao  staff    542  5 18 20:18 L11 class.js
-rw-r--r--  1 jiazhenghao  staff    545  5 18 20:28 L12 Promise and async await.js
-rw-r--r--  1 jiazhenghao  staff   1600  5 18 22:32 L13 NPM command.js
-rw-r--r--  1 jiazhenghao  staff    573  5 18 21:33 L14 package and package-lock json files.md
drwxr-xr-x  5 jiazhenghao  staff    160  5 18 21:23 L15 create package
drwxr-xr-x  9 jiazhenghao  staff    288  5 18 22:20 L16 npm scripts
-rw-r--r--  1 jiazhenghao  staff   2286  5 18 23:12 L17 wrapper module.js
-rw-r--r--  1 jiazhenghao  staff    729  5 18 23:19 L18 how to use modules API.md
-rw-r--r--  1 jiazhenghao  staff    391  5 18 23:24 L19 global object.js
-rw-r--r--  1 jiazhenghao  staff    175  5 18 23:30 L20 the event loop.md
-rw-r--r--  1 jiazhenghao  staff    568  5 18 23:49 L21 deal with errors.js
-rw-r--r--  1 jiazhenghao  staff     44  5 18 23:33 L21 errors and exceptions.md
-rw-r--r--  1 jiazhenghao  staff     41  5 18 23:55 L22 node clusters.md
-rw-r--r--  1 jiazhenghao  staff   1058  5 19 00:11 L23 sync node and async.js
-rw-r--r--  1 jiazhenghao  staff    517  5 19 07:35 L24 event emitter.js
-rw-r--r--  1 jiazhenghao  staff    422  5 19 08:22 L25 details on web server.js
-rw-r--r--  1 jiazhenghao  staff    731  5 19 07:53 L26 nodemon.md
-rw-r--r--  1 jiazhenghao  staff    121  5 19 08:34 L27 Framework other than express.md
drwxr-xr-x  6 jiazhenghao  staff    192  5 19 08:39 L27 simple express example
-rw-r--r--  1 jiazhenghao  staff    121  5 19 08:38 L28 template for express and other web servers.md
drwxr-xr-x  7 jiazhenghao  staff    224  5 19 08:51 L28 template like ejs
-rw-r--r--  1 jiazhenghao  staff    459  5 19 08:56 L29 os.js
-rw-r--r--  1 jiazhenghao  staff    639  5 19 09:01 L30 fs.js
-rw-r--r--  1 jiazhenghao  staff    640  5 19 09:07 L31 child process.js
-rw-r--r--  1 jiazhenghao  staff    107  5 18 12:58 compare.js
-rw-r--r--@ 1 jiazhenghao  staff  55457  5 19 07:38 node modules.jpeg
-rw-r--r--@ 1 jiazhenghao  staff  75029  5 19 07:38 npm and npx.jpeg
drwxr-xr-x  5 jiazhenghao  staff    160  5 18 21:15 npm-test
*/

// Use Shell Syntax
const shell = spawn('ls -al ~ | wc -l', { shell: true });
shell.stdout.pipe(process.stdout);