const repl = require('repl');
let r = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
});
//r.context.lodash = require('lodash');
//rlwrap
//node -c "xxx.js"
//node -p "process.arch"
//x64
//node -p "os.cpus"
//node -p "process.argv.slice(1)" test 42
//[ 'test', '44' ]
// 192:nodejs jiazhenghao$ node -p "process.argv" test 44
// [ '/usr/local/bin/node', 'test', '44' ]