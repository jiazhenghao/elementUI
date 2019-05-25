const express = require('express');
const debug = require('debug')('app: authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

function router(nav) {
    authRouter.route('/signUp').post(
        (req, res) => {
            const { username, password } = req.body;
            const url = 'mongodb://localhost:27017';
            const dbName = 'libraryApp';
            (async function addUser() {
                let client;
                try {
                    client = await MongoClient.connect(url);
                    debug('Connected correctly to server');
                    const db = client.db(dbName);
                    const collection = db.collection('users');
                    const user = { username, password };
                    const results = await collection.insertOne(user);
                    debug(results);

                    //login in
                    req.login(results.ops[0], () => {
                        res.redirect('/auth/profile');
                    });
                    //login out
                    //req.logout();
                    
                } catch (err) {
                    debug(err.stack);
                }
                client.close();
            })();

            //debug(req.body);
            //create user 

            //这是在appjs中使用了body-parser带来的好处
            //res.json(req.body);
        });
    authRouter.route('/profile')
        .all((req, res, next)=>{
            if (req.user) {
                next();
            } else {
                res.redirect('/');
            }
        })
        .get((req, res) => {
            res.json(req.user);
        });
    authRouter.route('/signIn').get((req, res)=> {
        res.render('signIn', {
            nav,
            title: 'Sign In'
        });
    }).post(passport.authenticate('local', {
        successRedirect: '/auth/profile',
        failureRedirect: '/'
    }));

    return authRouter;
}

module.exports = router;