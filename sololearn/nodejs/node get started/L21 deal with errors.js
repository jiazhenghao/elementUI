const path = require("path");
const fs = require("fs");

const files = ["L20 the event loop.md", "djsd.js", ".bash_profile"];
files.forEach(file => {
    try {
        //console.log(process.env.HOME);
        const filePath = path.resolve(process.env.HOME, file);
        const data = fs.readFileSync(filePath);
        console.log("File data is ", data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            //console.log('File not found');
            console.log(`${file} File not found`);
        } else {
            throw err;
        }
    }
});