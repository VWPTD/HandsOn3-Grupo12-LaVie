const Psicologo = require("../models/Psicologo");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = require('../config/secret')

const loginController = {
        
    async login(req,res){
        try{
            const{email, senha} = req.body;
            const userLogado = await Psicologo.findOne({
                where: {
                    email
                }
            });

            if(!userLogado){
                return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente');
            }
            else{                
                if(!bcrypt.compareSync(senha, userLogado.senha)){
                    return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente');
                }       
            }

            const token = jwt.sign({
                id:userLogado.id,
                nome: userLogado.nome,
                email:userLogado.email
            }, secret.chave);

            return res.status(200).json(token);
            
            

        }
        
        catch(error){
            console.error(error);
            return res.status(500).json("Erro ao executar login")
        }
    }
}

module.exports = loginController;