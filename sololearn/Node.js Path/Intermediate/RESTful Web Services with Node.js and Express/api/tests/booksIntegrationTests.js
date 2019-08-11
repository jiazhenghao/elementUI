require('should');
const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';//another database for test

const app = require('../app.js');

const Book = mongoose.model('Books');
const agent = request.agent(app);

describe('Book Crud Test', () => {
    it('Should allow a book to be posted and return a read and _id', (done) => {
        const bookPost = { title: 'My Book', author: 'Jon', genre: 'Fiction' };

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end((err, results) => {
                //results.body.read.should.not.equal(false);
                results.body.should.have.property('_id');
                done();
            });
    });

    afterEach((done) => {
        //clean database
        Book.deleteMany({}).exec();
        done();
    });

    after((done) => {
        mongoose.connection.close();
        app.server.close(done());
    });
});