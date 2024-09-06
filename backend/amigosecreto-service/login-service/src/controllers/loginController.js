const loginRepository = require('../repositories/loginResipository');
const jwt = require('jsonwebtoken');

module.exports = {
    async validarLogin(request, response){
        const login = await loginRepository.validarLogin(request.body);
        if(login === null){
            return response.json({
                auth : false,  token : null ,    
            });
        }
        const token = jwt.sign({_id: login._id}, process.env.JWT_KEY, { expiresIn: 300 });
        return response.json({
            auth : true,  token : token 
        });
    },
    async create (request,response){
        const login = await loginRepository.create(request.body);
        if(login === null){
            response.status(500);
            return response.json({
                "mensagem" : "Erro ao criar login!",
                "status" : 500                          
            }); 
        }
        return response.json({
            "mensagem" : "Login criado com sucesso!",
            "status" : 200                      
        }); 
    }
}