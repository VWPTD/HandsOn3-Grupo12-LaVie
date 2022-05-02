const Psicologo = require("../models/Psicologo");
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');


const PsicologoController = {
    async listarPsicologo(req, res){

       const { termo, page = 1 } = req.query;       

       const limit = 10;
       const offset = parseInt(limit) * (parseInt(page) - 1); 
       let filter = {
           limit: parseInt(limit), 
           offset,
           atrributes: ["nome"],
       };             

       if (termo) {
           Object.assign(filter, {
             where: {               
               nome: { [Op.substring]: termo },
             },
           });
         }       

       const Psicologos = await Psicologo.findAll(filter);
       res.json(Psicologos);
   },
    async cadastrarPsicologo(req, res){

        try{
        const { nome, email, senha, apresentacao } = req.body;
        const novaSenha = bcrypt.hashSync(senha,10);
        
        
        const novoPsicologo = await Psicologo.create({
            nome,
            email,
            senha: novaSenha,
            apresentacao
        });

        res.status(201).json("Psicologo cadastrado!");
    
        } catch{
            console.log("Erro ao cadastrar psicólogo")
            console.error(error)
            return res.status(500).json("Erro ao cadastrar psicólogo")
        }
    
    },
    
    async atualizarPsicologo(req, res) {
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;

        const atualizarNome = await Psicologo.update(
            {
                nome,
                email,
                senha, 
                apresentacao,
            },
            {
                where: {
                    id,
                }
            }
        );       
        const PsicologoUpdated = await Psicologo.findByPk(id);
        return res.json(PsicologoUpdated);
    },
    async deletarPsicologo(req, res) {
        const {id} = req.params;

        await Psicologo.destroy({
            
                where: {
                    id,
                }
            
        });
        res.status(204).json("Psicologo deletado")
    },
};

module.exports = PsicologoController;