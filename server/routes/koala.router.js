const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT
router.put('/:koalaId', (req, res) => {
    let sqlQuery = `
      UPDATE "koalas"
        SET "ready-to-transfer"=$1
        WHERE "id"=$2;
    `;
    let sqlValues = [
      true,
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