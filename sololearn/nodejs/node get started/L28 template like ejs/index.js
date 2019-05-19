const express = require("express");
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res)=> {
    //res.send("Hello EXPRESS");
    res.render('index');
});

server.get('/about', (req, res)=> {
    //res.send("ABOUT...page");
    res.render('about');
});

server.listen(4242, ()=> {
    console.log("Express Server is running...");
});
