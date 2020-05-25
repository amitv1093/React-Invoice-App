//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.get('/all', (request, response) => {
    invoiceModel.find((err, docs) => {
        if (err) {
            console.log('Error ', err);
            response.status(500).json({ message: 'Problem reading the information' });
        } else {
            //everything is working
            console.log('all the invoices wrere found');
            response.status(200).json(docs);
        }
    });
    //response.send('Hello from router read.js');
}); //http method use for established connection


router.get('/:invoiceId', (request, response) => {
    invoiceModel.findOne({
        _id: request.params.invoiceId
    }, (err, invoice) => {
        if (err) {
            //something went wrong
            console.log('Error ' + err);
            response.status(500).json({ message: 'Problems when reading invoice' });
        } else {
            //everything is working
            console.log('The Invoice was found');
            response.status(200).json(invoice);
        }
    });
});

//exporting the contents of this file
module.exports = router;