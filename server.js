// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const app = express();
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function(req, res) {
//     return res.send('pong');
// });

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8080);


// var http = require('http');
// var server = http.createServer();
// server.on('request', function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World \n');
//     res.end()
// })

// server.listen(8080);
// console.log('Server running on localhost 8080');


//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//static web server
//app.use(express.static(path.join(__dirname, 'dist')));

//connection to mongoDB
mongoose.connect('mongodb+srv://root:helloworld@invoicegeneratorapp-k3ss0.gcp.mongodb.net/InvoiceStorage?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (error) => {
    console.log('Error ' + error);
});

mongoose.connection.once('open', () => {
    console.log('Connection to mongodo is working');
});


//body--parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
// app.get('/hello', (request, response) => {
//     response.send('<h1> Hello World!!! </h1>');
// });

//REST API
app.use('/api/createinvoice', require('./routes/create.js'));
app.use('/api/readinvoice', require('./routes/read.js'));
app.use('/api/updateinvoice', require('./routes/update.js'));
app.use('/api/deleteinvoice', require('./routes/delete.js'));

// app.get('/api/customers', (request, response) => {
//     const customers = [
//             { id: 1, firstName: 'John', lastName: 'Doe' },
//             { id: 2, firstName: 'Steve', lastName: 'Smith' },
//             { id: 3, firstName: 'Mary', lastName: 'Swanson' },
//         ]
//     response.json(customers);
// });

// app.get('*', (request, response) => {
//     response.send("<h1>Error 404: Page Not Found</h1>");
// });

//port
app.listen(8080, () => {
    console.log('Listening at localhost:8080');
});