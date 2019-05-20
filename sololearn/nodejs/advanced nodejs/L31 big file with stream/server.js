const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //if using data as Buffer, it will cost lots of memory usage
  // fs.readFile('./big.file', (err, data) => {
  //   if (err) throw err;
  //
  //   res.end(data);
  // });

  //If create a readable stream, and pip to the res. it will take much less memory
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
