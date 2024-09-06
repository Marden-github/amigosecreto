const SorteioRepository = require('../repositories/sorteioRepository');

module.exports = {
    async sortear (request, response) {
        try {
            let grupo = request.body;
            let { participantes } = request.body;
            let novoArray = participantes.map(item => ({
                                                    ordem : Math.random(),
                                                    idParticipante : item._idParticipante,
                                                    nomeParticipante : item.nomeParticipante
                                                }));
            novoArray = novoArray.sort(( a, b ) => a.ordem - b.ordem );
            let i = 0;
            for (let i = 0; i < participantes.length; i++) {
                let auxIndex = novoArray.findIndex(item => item.idParticipante !== participantes[i]._idParticipante);
                participantes[i]._idAmigo = novoArray[auxIndex].idParticipante;
                participantes[i].nomeAmigo = novoArray[auxIndex].nomeParticipante;
                novoArray = novoArray.filter(item => item.idParticipante !== participantes[i]._idAmigo);
            }
            grupo.participantes = participantes;

            await SorteioRepository.create(grupo);
            return response.json({
                "mensagem" : "Sorteio criado",
                "status" : 200,
                "grupo" : grupo
            });
        }
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "grupo" : null
            });
        }
    },
}