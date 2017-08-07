require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const express = require('express');
const compression = require('compression')
const markoExpress = require('marko/express');
const router = require('./routes');

const app = express();

// Enable gzip compression for all HTTP responses
app.use(compression());
//enable res.marko(template, data)
app.use(markoExpress()); 

app.use('/', router);

app.listen(3000);