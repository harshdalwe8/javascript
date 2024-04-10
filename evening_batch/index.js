const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const importedRoutes = require('./Routes/path');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/api/v1',importedRoutes.exampleRoutes);

app.listen(port, () => {
    console.log(`listing on port: ${port}`);
});
