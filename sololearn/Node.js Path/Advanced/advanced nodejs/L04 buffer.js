//buffer is useful when dealing with image files
//unlike array, cannot be changed

// const string = 'touché';
// const buffer = Buffer.from('touché');

const string = 'kingdoms贾';
const buffer = Buffer.from('kingdoms贾');

console.log(string, string.length);//touché 6
console.log(buffer, buffer.length);//<Buffer 74 6f 75 63 68 c3 a9> 7

// kingdoms贾 9
// <Buffer 6b 69 6e 67 64 6f 6d 73 e8 b4 be> 11
//node
//Buffer
//alloc  allocUnsafe   from
//Buffer.alloc(8)  already fill
//Buffer.allocUnsafe(8).fill()

const fs = require('fs');
const conversionMap = {
    '88': '65',
    '89': '66',
    '90': '67',
};
fs.readFile(__filename, (err, buffer) => {
    let tag = buffer.slice(-4, -1);
    for (let i = 0; i < tag.length; i++) {
        tag[i] = conversionMap[tag[i]];
    }
    console.log(buffer.toString());
});
// TAG: XYZ