const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv-safe');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.URL_DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3334, () => console.log(`API online na porta 3334!`));