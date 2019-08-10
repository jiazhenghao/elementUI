const express = require('express');
function routes(Book) {
    const bookRouter = express.Router();
    bookRouter.route('/books')
        .post((req, res) => {
            const book = new Book(req.body);
            book.save();
            console.log(book);
            return res.status(201).json(book);
        })
        .get((req, res) => {
            //http://localhost:4000/api/books?genre=Fantasy
            const query = {};
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, (err, books) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(books);
            });
        });

    bookRouter.route('/books/:bookId').get((req, res) => {
        //http://localhost:4000/api/books/5d4e502cc500186313d711d1
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                return res.send(err);
            }
            return res.json(book);
        });
    });
    return bookRouter;
}

module.exports = routes;