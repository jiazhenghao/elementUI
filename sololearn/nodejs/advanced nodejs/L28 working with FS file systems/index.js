const fs = require('fs');

//Async
fs.readFile(__filename, (err, data) => {
    if (err) throw err;

})

//Sync
const data = fs.readFileSync(__filename);

