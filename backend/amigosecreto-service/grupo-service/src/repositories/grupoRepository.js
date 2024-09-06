const Grupo = require('../models/grupo');

module.exports = {
    async create (grupo){
        try{
            let { nome, valorMinimo , valorMaximo, dataSorteio , responsavel }  = grupo;
            const retornGrupo = await Grupo.create({
                nome,
                valorMinimo,
                valorMaximo ,
                dataSorteio,
                responsavel
         }); 
         return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async edit (Grupo){
        try{
            let { _id, nome, valorMinimo , valorMaximo, dataSorteio }  = Grupo;
            const retornGrupo = await Grupo.updateOne(
                { _id }, {$set : { nome , valorMinimo ,valorMaximo, dataSorteio }}
         ); 
         return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getById (_id){
        try{
            
            const retornGrupo = await Grupo.find({ _id }); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async delete (_id){
        try{
            
            const retornGrupo = await Grupo.deleteOne({ _id : _id}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async addParticipante (grupo){
        try{           
            let { _id , participantes } = grupo; 
            const retornGrupo = await Grupo.updateOne({ _id }, { $push : { participantes }});
             return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getGrupoByIdResponsavel (_idResponsavel){
        try{
            const retornGrupo = await Grupo.find({"responsavel._idResponsavel" : _idResponsavel}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async getGrupoByIdParticipante (_idParticipante){
        try{            
            const retornGrupo = await Grupo.find({ participantes : 
                {$elemMatch :{ "_idParticipante" : _idParticipante}}}); 
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async delParticipante (_id, _idParticipante){
        try{
            
            const retornGrupo = await Grupo.updateOne({ _id }, { $pull : { participantes : { _idParticipante }}});
            return retornGrupo;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
}