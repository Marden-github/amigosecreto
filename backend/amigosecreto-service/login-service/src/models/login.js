const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email : String,
    senha : String,
    ativo : Boolean
});

module.exports = mongoose.model('Login',loginSchema);