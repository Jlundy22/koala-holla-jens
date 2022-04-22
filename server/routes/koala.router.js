// const { Router } = require('express'); ~~~~(line 3 is doing the same thing)
const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: 'koalasDb',
  host: 'localhost'
});

pool.on('connect', () => {
  console.log('Yay! We are talking to our postgresql database!');
})

pool.on('error', (error) => {
  console.log('Something with postgresql really broke. It broke hard.', error);
})




// const pool = new Pool({
//     database: 'koalas', 
//     host: 'localhost', 
//     port: 5432, 
//     max: 10, 
//     idleTimeoutMillis: 30000
// });

// pool.on('connect', () => {
//     console.log('Postgresql connected');
// });

// pool.on('error', (error) => {
//     console.log('Error with postgres pool', error)
// });

// router.get('/', (req, res) => {


// });





// let koalas = [];

// // DB CONNECTION


// GET
koalaRouter.get('/' , (req, res) => {
    console.log('GET /koalas');
    let queryText = `
    SELECT * FROM "koalas"
    `;
    pool.query(queryText)
    .then((dbResult) => {
        res.send(dbResult.rows);
    })
    .catch((dbError) => {
        console.log('error in GET /songs db request:', dbError);
        res.sendStatus(500);
    })
});




// POST
// Router.post('/', (req, res) => {
//   console.log('POST /koalas');
//   console.log('\treq.body ==>', req.body);
//   koalas.push(req.body.newKoala);
//   res.sendStatus(201);
// })






// PUT
koalaRouter.put('/:koalaId', (req, res) => {
    let sqlQuery = `
      UPDATE "koalas"
        SET "readyToTransfer"=$1
        WHERE "id"=$2;
    `;
    let sqlValues = [
      'Y',
      req.params.koalaId
    ]
    pool.query(sqlQuery, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbError) => {
        console.log('error in PUT /koalas db request:', dbError);
        res.sendStatus(500);
      })
  })

// DELETE

module.exports = koalaRouter;