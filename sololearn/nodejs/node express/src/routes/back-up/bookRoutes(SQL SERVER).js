const express = require('express');
const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

function router(nav) {
    // const books = [
    //     {
    //         title: 'War and Peace',
    //         genre: 'Historical Fiction',
    //         author: 'Lev Nikolayevich Tolstoy',
    //         read: false
    //     },
    //     {
    //         title: 'Les Miserables',
    //         genre: 'Historical Fiction',
    //         author: 'Victor Hugo',
    //         read: false
    //     },
    //     {
    //         title: 'The Time Machine',
    //         genre: 'Science Fiction',
    //         author: 'H. G. Wells',
    //         read: false
    //     },
    //     {
    //         title: 'A jounery into the Center of the Earth',
    //         genre: 'Science Fiction',
    //         author: 'Jules Verne',
    //         read: false
    //     },
    //     {
    //         title: 'The Dark World',
    //         genre: 'Fantasy',
    //         author: 'Henry Kuttner',
    //         read: false
    //     },
    //     {
    //         title: 'The wind in the Willows',
    //         genre: 'Fantasy',
    //         author: 'Kenneth Grahame',
    //         read: false
    //     }
    // ];

    bookRouter.route('/')
        .get((req, res) => {
            (async function query() {
                const request = new sql.Request();
                const { recordset } = await request.query('select * from books');
                //debug(result);
                res.render('bookListView',
                    {
                        nav,
                        title: 'Books',
                        books: recordset
                    });
            })();
        });
    bookRouter.route('/:id') //http://expressjs.com/en/guide/routing.html
        .all((req, res, next) => {
            (async function query() {
                const { id } = req.params;
                const request = new sql.Request();
                const { recordset } = await request.input('id', sql.Int, id)
                    .query('select * from books where id = @id');
                debug(recordset);
                req.book = recordset[0];
                req.id = recordset[0].id;
                next();
            })();
        })
        .get((req, res) => {
            res.render('bookView',
                {
                    nav,
                    title: `Book ${req.id}`,
                    book: req.book
                });
        });
    return bookRouter;
}

module.exports = router;