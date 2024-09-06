const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    nomeLista : String,
    _idParticipante : String,
    itens : [{
        nomeItem : String,
        descricaoItem : String
    }]
});

module.exports = mongoose.model('Lista', listaSchema);