const express = require("express");
const server = express();

server.get('/', (req, res)=> {
    res.send("Hello EXPRESS");
});

server.get('/about', (req, res)=> {
    res.send("ABOUT...page");
});

server.listen(4242, ()=> {
    console.log("Express Server is running...");
});
