//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.post('/', (request, response) => {
    const input = request.body;
    const newDocument = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });

    //saving information in database
    newDocument.save((err, doc) => {
        if (err) {
            //something went wrong
            console.log('err ' + err);
            response.status(500).json({ message: 'Problems when saving info' });
        } else {
            //Everthing is working ok
            console.log('The invoice was created successfully');
            response.status(200).json({ message: 'Invoice created sucessfully' });
        }
    });
    //response.send('Hello from router create.js');
}); //http method use for established connection

//exporting the contents of this file
module.exports = router;