const mongoose = require('mongoose');

const participanteSchema = new mongoose.Schema({
    nome : String,
    cpf  : String,
    email : String,
    senha : String
});

module.exports = mongoose.model('Participante',participanteSchema);