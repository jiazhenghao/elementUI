// 192:node get started jiazhenghao$ node -v
// v12.2.0
// 192:node get started jiazhenghao$ node -p "os.cpus().length"
// 8
// 192:node get started jiazhenghao$ node -p "process.versions.v8"
// 7.4.288.21-node.17
//node -h | less
//q
//192:elementUI jiazhenghao$ node --v8-options | less
//192:elementUI jiazhenghao$ node --v8-options | grep "in progess"

console.log('Current user is', process.env.USER);
console.log('\nScript executed with:');
console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);
//$ VAL1=10 node L06\ cli.js 
//$ export VAL1=10
//$ node L06\ cli.js 
//node -p "process.argv"
//[ '/usr/local/bin/node' ]
//192:node get started jiazhenghao$ node -p "process.argv" hi h5
//[ '/usr/local/bin/node', 'hi', 'h5' ]
//node
//process
//stdin stdout stderr
// 192:3-process jiazhenghao$ node 2-stdio-streams.js 
// dsdjkal sdlasd jcjzlc
// dsdjkal sdlasd jcjzlc
