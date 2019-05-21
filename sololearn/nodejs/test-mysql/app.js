const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const mysql = require('mysql');

const app = new express();

const port = process.env.PORT || 3001;

//to find all the static files via public
app.use(express.static(path.join(__dirname, '/public/')));
//set view directory and view engine 
app.set('views', './src/views');
app.set('view engine', 'ejs');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'my_database'
});


(async function MySQL(){
    connection.connect();
    const sql = `SELECT * FROM customers AS t WHERE t.ID = 2;`
    await connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        //debug(results[0]);
        const {FirstName, LastName, City, Zipcode, Salary} = results[0];
        debug(FirstName);
        app.get('/', (req, res) => {
            res.render('index', {
                //send some arguments to index via ejs template
                FirstName,
                LastName,
                City,
                Zipcode,
                Salary
            });
        });
    });
    connection.end();
})();

app.listen(port, () => {
    debug(`Listening on the port ${port}`);
});