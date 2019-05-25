const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
// console.log(files);
// [
//     'file0',  'file1',
//    'file10', 'file11',
//    'file12', 'file13',
//    'file14',  'file2',
//     'file3',  'file4',
//     'file5',  'file6',
//     'file7',  'file8',
//     'file9'
//  ]
const ms1Day = 24*60*60*1000;

files.forEach(file=> {
    const filePath = path.join(dirname, file);
    fs.stat(filePath, (err, stats)=>{
        if (err) throw err;
        if ((Date.now()-stats.mtime.getTime() > 7 * ms1Day)) {
            fs.unlink(filePath, (err)=> {
                if(err) throw err;
                console.log(`deleted ${filePath}`);
            })
        }
    });
});
