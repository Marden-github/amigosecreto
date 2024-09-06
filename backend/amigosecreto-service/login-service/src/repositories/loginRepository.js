const Login = require('../models/login');
const cripto = require('../utils/cripto');

module.exports = {
    async create (login){
        try{
            let {  email, senha }  = login;

            const retornLogin = await Login.create({                
                email ,
                senha: cripto(senha),
                ativo: true
         }); 
         return retornLogin;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
    async validarLogin (login){
        try{
            let {  email, senha }  = login;
            const retornLogin = await Login.find({ email , senha :cripto(senha) , ativo : true }); 
         return retornLogin;
        }
        catch (err) {
            console.log("Erro " + err);
        }
        return null;
    },
}