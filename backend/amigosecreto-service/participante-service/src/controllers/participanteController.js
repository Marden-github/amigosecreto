const ParticipanteRepository = require('../repositories/participanteRepository');

module.exports = {
    async create (request, response){      
        try {
            let { _id } =  await ParticipanteRepository.create(request.body);
           return response.json({
                "mensagem" : "Participante criado com sucesso",
                "status" : 200,
                "idParticipante" :_id            
            }); 
        }       
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "idParticipante" : null
            });
        }
    },
    async edit (request, response){
        try {
            let Participante =  await ParticipanteRepository.edit(request.body);
           return response.json({
                "mensagem" : "Participante atualizado com sucesso!",
                "status" : 200,
                "participante" :Participante            
            }); 
        }       
        catch (err) {
            return response.json({
                "mensagem" : "Erro " + err,
                "status" : 500,
                "idParticipante" : null
            });
        }
    },
    async delete (request, response){
        let { id }  = request.params;
        const participante = await ParticipanteRepository.delete(id);
        return response.json({
            "mensagem" : "Participante removido com sucesso!",
            "status" : 200
        }); 
    },
    async getById (request, response){
        let { id }  = request.params;
        console.log(id);
        let Participante =  await ParticipanteRepository.getById(id);
        console.log(`resposta ${Participante}`);
        if (Participante === null || Participante === "") {
            response.status(404);           
            return  response.json({
                "mensagem" : "Participante não encontrado!",
                "status" : 404,
                "participante" :Participante            
            });         
        }

        return response.json({
            "mensagem" : "Participante encontrado com sucesso!",
            "status" : 200,
            "participante" :Participante            
        });   
    },
}