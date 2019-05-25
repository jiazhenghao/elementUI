const fs = require('fs');
const readFileAsArray = function (file, cb = () => { }) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);//promise
                return cb(err);//callback
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);//promise
            cb(null, lines);//callback
        });
    });
};

//using promise
readFileAsArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count ', oddNumbers.length);
    })
    .catch(console.error);
//using callback
readFileAsArray('./numbers', (err, lines) => {
    if (err)
        throw err;
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count ', oddNumbers.length);
});

//node --v8-options | grep async
async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count ', oddNumbers.length);
    } catch (err) {
        console.error(err);
    }
}
countOdd();