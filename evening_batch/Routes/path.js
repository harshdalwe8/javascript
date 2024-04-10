const express = require('express');
const exampleRoutes = express.Router();

// import test data from test_data.js file
const person = require('../test_data');



exampleRoutes.get('/welcome',(req, res) => {
    res.send({ message: "Hello evening batch!" });
});

exampleRoutes.get('/person',(req, res) => {
    res.send({ data: person });
});

module.exports = {exampleRoutes};