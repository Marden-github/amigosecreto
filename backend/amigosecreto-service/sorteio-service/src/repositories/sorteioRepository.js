const Sorteio = require('../models/sorteio');

module.exports = {
    async create (grupo) {
        try{
            let { idGrupo, participantes } = grupo;
            const retornSorteio = await Sorteio.create({
                idGrupo,
                participantes
            });
            console.log(retornSorteio);
            return retornSorteio;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    }
}