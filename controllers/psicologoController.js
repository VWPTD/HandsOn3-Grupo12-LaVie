const Psicologo = require("../models/Psicologo");
const { Op } = require("sequelize");


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

        const { nome, email, senha, apresentacao } = req.body;
        
        const novoPsicologo = await Psicologo.create({
            nome,
            email,
            senha,
            apresentacao
        });

        res.status(201).json("Psicologo cadastrada!");
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