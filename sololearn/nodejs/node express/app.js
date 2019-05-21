const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');
const bodyParser = require('body-parser');

//authentication
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//const bookRouter = express.Router();

//sql server config for mssql
const config = {
    user: 'jiazhenghao',
    password: 'Wsrmm!748',
    server: 'jiazhenghao.database.windows.net',
    database: 'PSLibrary',
    options: {
        encrypt: true
    }
}
sql.connect(config).catch(err => debug(err));

const app = new express();
const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middleware
app.use(cookieParser());
app.use(session({secret: 'qazxswedc'}));

//passport config
require('./src/config/passport.js')(app);


app.use(express.static(path.join(__dirname, '/public/')));//静态文件去这个路径找
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));//找不到就去这个文件夹找css
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));//找不到的js就去这个文件夹找css
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));//再找不到的js就去这个文件夹找css
app.set('views', './src/views');//
app.set('view engine', 'ejs');//tell express to use pug as view engine
app.use(morgan('tiny'));//app.use(morgan('combined'));

const nav = [
    { link: '/books', title: 'Books2' },
    { link: '/authors', title: 'Authors2' }
];
//create a route, and use it
const bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books', bookRouter);//url里的路径
//create another router
const adminRouter = require('./src/routes/adminRoutes')(nav);
app.use('/admin', adminRouter);
//creat auth router
const authRouter = require('./src/routes/authRoutes')(nav);
app.use('/auth', authRouter);

//the basic get function 
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index', {
        nav,
        title: 'library'
    });
    //res.send('Hello from my sample app');
});

app.listen(port, () => {
    debug(`listening at port ${chalk.green(port)}`);
});
//DEBUG=app node app.js
