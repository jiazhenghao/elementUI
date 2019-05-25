const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  detached: true,
  stdio: 'ignore'
});

child.unref();
//timer.js继续执行，但detach就已经结束了。
//ps -ef | grep timer
//查看timer的执行情况

