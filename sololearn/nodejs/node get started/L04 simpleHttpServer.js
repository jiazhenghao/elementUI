const http = require("http");
const server = http.createServer((req, res) => {
    res.end("I'm the Iron Man!\n");
});
server.listen(4242, () => {
    console.log("The server is running");
});
