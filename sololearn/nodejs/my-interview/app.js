const express = require('express');
const app = new express();
const debug = require('debug')('app');


app.set('views', './views');
app.set('view engine', 'ejs');

const cars = {
    data: [{
        'deviceId': 1,
        'name': 'home',
        'status': 'armed'
    },
    {
        'deviceId': 2,
        'name': 'office',
        'status': 'disarmed'
    }
    ]
};

const sql = `SELECT * from customers as t where t.country="USA";`
const sqlJoin = `SELECT * from customers as a, countries as b where a.countryID = b.countryID; `

app.get('/devices', (res, req) => {
    debug(cars);
    req.render('index',{
        cars
    });

    //req.json(json);
});

app.listen(3000, () => {
    debug(`listening at 3000 `);
});