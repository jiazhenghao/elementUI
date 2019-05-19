const http = require("http");
const requestListener = (req, res) => {
    //req, res are streams!
    console.dir(req, {depth: 0});
    console.dir(res, {depth: 0});
    res.write("HELLO GUYS!\n");
    res.end();
};
const server = http.createServer();
server.on("request", requestListener);
//or 
//const server = http.createServer(requestListener);
server.listen(4242, ()=> {
    console.log("Server is running...");
});
