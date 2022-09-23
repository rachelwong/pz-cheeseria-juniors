import * as express from 'express';
var fs = require('fs');

const cheeses = require('./data/cheeses.json');
const dummyPurchase = require('./data/dummyPurchase.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

// to grab and display all the purchased items
router.get('/api/purchase', (req, res, next) => {
    res.json(dummyPurchase);
    // res.json(req.body)

    // attempt to read from file
    // try {
    //     var data = fs.readFileSync('/data/array.txt', 'utf8');
    //     res.json(data.toString());
    // } catch(e) {
    //     console.log('Error:', e.stack);
    // }
});

// to send all purchased items to server
router.post('/api/purchase', (req, res, next) => {
    // attempt to write to a file
//     var file = fs.createWriteStream('./data/array.txt');
//     file.on('error', function(err) { /* error handling */ });
//     require('fs').writeFile(
//         './data/array.txt',
//         JSON.stringify(req.body),
//         function (err) {
//             if (err) {
//                 console.error('Error writing to file');
//             }
//         }
// );
    // this is where it'll commit to database
    res.send(req.body);
});

export default router;