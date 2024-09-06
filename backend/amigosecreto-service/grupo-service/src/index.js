const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.URL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3331, () => console.log(`API online na porta 3331!`));