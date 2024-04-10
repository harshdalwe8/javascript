const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// Import endpoints
const importedRoutes = require('./Routes/path');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

// Middileware 
app.use('/api/v1',importedRoutes.exampleRoutes);

app.get('/test',(req, res)=>{
    res.send('this is working');
});
// app 
app.listen(port, () => {
    console.log(`listing on port: ${port}`);
});
