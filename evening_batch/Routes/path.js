const express = require('express');

// import test data from test_data.js file
const person = require('../test_data');

const exampleRoutes = express.Router();


exampleRoutes.get('/welcome',(req, res) => {
    res.send({ message: "Hello evening batch!" });
});

exampleRoutes.get('/person',(req, res) => {
    res.send({ data: person });
});

module.exports = {exampleRoutes};