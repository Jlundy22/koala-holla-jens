const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

let koalas = [];

// DB CONNECTION


// GET


// POST
Router.post('/', (req, res) => {
  console.log('POST /koalas');
  console.log('\treq.body ==>', req.body);
  koalas.push(req.body.newKoala);
  res.sendStatus(201);
})






// PUT


// DELETE

module.exports = koalaRouter;