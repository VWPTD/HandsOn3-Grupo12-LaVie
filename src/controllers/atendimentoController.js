const Atendimento = require("../models/Atendimento");
const { Op } = require("sequelize");

const AtendimentoController = {
    async listarAtendimento(req, res){

        try{
            const { page = 1 } = req.query;
            const { id } = req.params;        

            const limit = 10;
            const offset = parseInt(limit) * (parseInt(page) - 1); 
            let filter = {
                limit: parseInt(limit), 
                offset,
                atrributes: ["id"],
            };             

            if (id) {
                Object.assign(filter, {
                    where: {               
                    id,
                    },
                });
                }       

            const atendimentos = await Atendimento.findAll(filter);
            res.status(200).json(atendimentos);
        } catch {
            console.log("Id não encontrado");
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    },

    async cadastrarAtendimento(req, res){
        try{
            const { psicologo_id, paciente_id, data_atendimento, observacao } = req.body;
            
            const novoAtendimento = await Atendimento.create({
                psicologo_id, 
                paciente_id, 
                data_atendimento, 
                observacao
            });

            res.status(201).json("Atendimento cadastrado!");
        }catch{
            console.log("Falha na requiseção");
            console.error(error);
            return res.status(400).json("Falha na requiseção");
        }
    }
};    

module.exports = AtendimentoController;