const Participante = require('../models/participante');

module.exports = {
    async create (participante){
        try{
            let { nome, cpf , email, senha }  = participante;
            const retornParticipante = await Participante.create({
                nome,
                cpf,
                email ,
                senha
         }); 
         return retornParticipante;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async edit (participante){
        try{
            let { _id, nome, cpf , email, senha }  = participante;
            const retornParticipante = await Participante.updateOne(
                { _id : _id}, {$set : { nome , email ,senha, cpf }}
         ); 
         return retornParticipante;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getById (_id){
        try{
            
            const retornParticipante = await Participante.find({ _id }); 
            return retornParticipante;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async delete (_id){
        try{
            
            const retornParticipante = await Participante.deleteOne({ _id : _id}); 
            return retornParticipante;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
}