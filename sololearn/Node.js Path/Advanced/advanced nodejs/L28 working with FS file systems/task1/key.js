const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');
//console.log(dirname);

const files = fs.readdirSync(dirname);

console.log(1);
files.forEach(file => {
    const filePath = path.join(dirname, file);
    //console.log(filePath);
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        fs.truncate(filePath, stats.size/2, (err)=> {
            if (err) throw err;
        });
    });
});
//more files/http.js
