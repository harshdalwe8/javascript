const express = require('express');
const exampleRoutes = express.Router();

const testreq = require('../Controller/test');
const encTest = require('../Controller/test2');

// import test data from test_data.js file
const person = require('../test_data');



exampleRoutes.get('/welcome',(req,res,next) => {
    res.send('Welcome in evening batch!');
});

exampleRoutes.get('/person',(req, res) => {
    res.send({ data: person });
});

module.exports = {exampleRoutes};