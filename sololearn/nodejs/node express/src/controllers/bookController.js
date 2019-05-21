const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookController');

function bookController(bookService, nav) {
    function getIndex(req, res) {
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected successfully to the server');
                const db = client.db(dbName);
                const collection = await db.collection('books');
                const books = await collection.find().toArray();

                res.render(
                    'bookListView',
                    {
                        nav,
                        title: 'Library',
                        books
                    }
                );
            } catch (err) {
                debug(err);
            }
            client.close();
        })();
    }
    function getById(req, res) {
        const { id } = req.params;
        const url = 'mongodb://localhost:27017';
        const dbName = 'libraryApp';
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                debug('Connected successfully to the server');
                const db = client.db(dbName);
                const collection = await db.collection('books');
                debug(id);//5ce35b39ee70a16aeaca1e76
                const book = await collection.findOne({ _id: new ObjectID(id) });
                
                //bookId 后来加的，要和API调用的一样
                book.details = await bookService.getBookById(book.bookId);
                debug(book);
                res.render('bookView',
                    {
                        nav,
                        title: `${book.title}`,
                        book
                    });
            } catch (err) {
                debug(err.stack);
            }
            client.close();
        })();
    }
    function middleware(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/');
        }
    }

    return {
        getIndex,
        getById,
        middleware
    };


}

module.exports = bookController;