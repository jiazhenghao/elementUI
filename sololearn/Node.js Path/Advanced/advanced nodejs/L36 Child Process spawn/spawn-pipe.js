const { spawn } = require('child_process');
const child = spawn('wc');
process.stdin.pipe(child.stdin);

child.stdout.on('data', data => {
    console.log(`child stdout:\n ${data}`);
});

//wc 命令
//输入文字，可以换行，
//control + D
//输出行数，字数，字符数

