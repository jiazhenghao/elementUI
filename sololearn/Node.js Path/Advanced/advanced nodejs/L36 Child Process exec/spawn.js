const { spawn } = require('child_process');

//Shell mode
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });
//./exec.js
//./spawn.js

// Different cwd
// const child = spawn('find . -type f | wc -l', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: '/Users/jiazhenghao/Downloads'
// });
//  177613

// Custom env
// const child = spawn('echo $ANSWER', {
//   stdio: 'inherit',
//   shell: true,
//   env: { ANSWER: 42 },
// });
