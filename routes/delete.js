//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.delete('/:invoiceId', (request, response) => {
        invoiceModel.deleteOne({
            _id: request.params.invoiceId
        }, (err) => {
            if (err) {
                //problems when removing the inovice
                console.log('Error ' + err);
                response.status(500).json({ message: 'Problems when removing item' });
            } else {
                console.log('the invoice was removed from MongoDB');
                response.status(200).json({ message: 'the invoice was deleted' });
            }
        });
        //  response.send('Hello from router delete.js');
    }) //http method use for established connection

//exporting the contents of this file
module.exports = router;