require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const express = require('express');
const compression = require('compression')
const markoExpress = require('marko/express');
const router = require('./routes');

const app = express();

// Enable gzip compression for all HTTP responses
app.use(compression());

// Use the express.static built-in middleware to serve static files
// The path provided to express.static is relative to the directory where the node process was launched
// '/assets' is a virtual path (does not exist in the file system)
app.use('/assets', express.static(`${__dirname}/public`));

//enable res.marko(template, data)
app.use(markoExpress()); 

app.use('/', router);

app.listen(3000);