const express = require('express');
const adminRouter = express.Router();
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');


const books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        bookId: 656,
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        bookId: 24280,
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A jounery into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'The wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
    }
];

function router() {
    adminRouter.route('/').get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected successfully to the server');
                const db = client.db(dbName);
                const response = await db.collection('books').insertMany(books);
                res.json(response);
            } catch (err) {
                debug(err);
            }
            client.close();
        })();
    });

    return adminRouter;
}

module.exports = router;