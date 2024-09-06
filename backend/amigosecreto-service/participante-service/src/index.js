const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect(process.env.URL_DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3335);