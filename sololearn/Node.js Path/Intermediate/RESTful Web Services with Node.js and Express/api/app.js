const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
    console.log('This is a test');
    const db = mongoose.connect('mongodb://localhost/bookAPI_Test');//去往测试的数据库
} else {
    console.log('This is for real');
    const db = mongoose.connect('mongodb://localhost/bookAPI');//去到生产的数据库
}

//const db = mongoose.connect('mongodb://127.0.0.1:27017/bookAPI');
//const db = mongoose.connect('mongodb://localhost/bookAPI');
//const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//把这个移动到下面是非常关键的，因为否则的话，post参数还没有json化，就使用了bookRouter
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;
