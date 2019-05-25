const {spawn} = require('child_process');

const child = spawn('find',['.', '-type', 'f']);//find . -type f
//const child = spawn('pwd');

child.stdout.on('data', (data)=>{
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data)=> {
    console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

//other events on child: disconnect, error, message, close
//message is used to communicate between child processes

//std io object: child.stdin, child.stdout, child.stderr
//normally, in is readable, out is writable.
//but child_process is the opposite, in is writable, out is readable.
