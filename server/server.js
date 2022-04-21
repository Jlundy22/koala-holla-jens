const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koala.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/koalas', koalaRouter)

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'koalas', 
    host: 'localhost', 
    port: 5432, 
    max: 10, 
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});

router.get('/', (req, res) => {


});