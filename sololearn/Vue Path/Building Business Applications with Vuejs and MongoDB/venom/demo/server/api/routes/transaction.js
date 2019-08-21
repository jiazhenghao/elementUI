const Transaction = require('../../models/Transaction.js');
const mongoose = require('mongoose');

module.exports = router => {
    // Get transactions for given year and month, by userId...
    router.get('/transaction/:year/:month', (req, res) => {
        //console.log(req.params);
        const userId = req.get('userId');
        //const userId = '5b5b5df1333e8500dddc37b3';
        const month = req.params.month - 1; // JS months are zero-based
        const year = req.params.year;
        const startDt = new Date(Date.UTC(year, month, 1, 0, 0, 0));
        const endDt = new Date(Date.UTC(year, month + 1, 1, 0, 0, 0));

        const qry = {
            userId: userId,
            transactionDate: {
                $gte: startDt,
                $lt: endDt
            }
        };
        //console.log(qry);
        Transaction.find(qry)
            .sort({ transactionDate: 1 })
            .exec()
            .then(docs => {
                //console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error finding transactions for user',
                    error: err
                });
            });
    });

    // Get transactions running balance for a specific user...
    router.get('/transaction/balance/:year/:month', (req, res) => {
        const userId = req.get('userId');
        // const userId = '5b5b5df1333e8500dddc37b3';

        const month = req.params.month - 1; // JS months are zero-based
        const year = req.params.year;
        const endDt = new Date(Date.UTC(year, month, 1));
        const pipeline = [
            {
                $match: {
                    userId: mongoose.Types.ObjectId(userId),
                    //userId: userId,
                }
            },
            {
                $match: {
                    transactionDate: { $lt: endDt },
                }
            },
            {
                $group: {
                    _id: null,
                    charges: { $sum: '$charge' },
                    deposits: { $sum: '$deposit' }
                }
            }
        ];

        Transaction.aggregate(pipeline).exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                    message: 'Error finding transactions for user',
                    error: err
                }));
    });

    // Create new transaction document...
    router.post('/transaction', (req, res) => {
        let transaction = new Transaction(req.body);
        transaction.save((err, transaction) => {
            if (err) return //console.log(err);
            res.status(200).json(transaction);
        });
    });
};