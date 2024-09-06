const mongoose = require('mongoose');

const sorteioSchema = new mongoose.Schema({
    dataRealizado : {
        type : Date,
        default : Date.now()
    },
    idGrupo : String,
    participantes : [{
        _idParticipante : String,
        nomeParticipante : String,
        _idAmigo : String,
        nomeAmigo : String
    }]
});

module.exports = mongoose.model('Sorteio', sorteioSchema);