const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    nome : String,
    valorMinimo  : {
        type: Number
    },
    valorMaximo  : {
        type: Number
    },
    dataSorteio: Date,
    flSorteado : { Boolean, default : false },
    responsavel : {
        _idResponsavel : String,
        nomeResponsavel : String
    },
    participantes : [{
        _idParticipante : String,
        nomeParticipante : String,
        _idAmigo : String,
        nomeAmigo : String
    }]
});

module.exports = mongoose.model('Grupo',grupoSchema);