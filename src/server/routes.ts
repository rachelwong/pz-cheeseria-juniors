import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const dummyPurchase = require('./data/dummyPurchase.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

// to grab and display all the purchased items
router.get('/api/purchase', (req, res, next) => {
    res.json(dummyPurchase);
});

// to send all purchased items to server
router.post('/api/purchase', (req, res, next) => {

    // this is where it'll commit to database
    res.send(req.body);
});

export default router;