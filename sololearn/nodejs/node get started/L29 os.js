const os = require('os');

console.log('OS platform:', os.platform());
//OS platform: darwin
console.log('OS CPU architecture:', os.arch());
//OS CPU architecture: x64
console.log('# of logical CPU cores', os.cpus().length);
//# of logical CPU cores 8
console.log('Home directory for current user', os.homedir());
//Home directory for current user /Users/jiazhenghao
console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');
// line 1
// line 2
// line 3