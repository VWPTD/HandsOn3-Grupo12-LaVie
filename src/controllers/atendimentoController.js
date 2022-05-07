const {Psicologo, Atendimento, Paciente} = require("../models")

const atendimentoController = {
    async cadastrarAtendimento(req, res){
        const {data_atendimento, observacao, paciente_id} = req.body;
        const {id} = req.auth;

        const atendimento = await Atendimento.create({

            data_atendimento, observacao, paciente_id, psicologo_id:id
            
        })
        res.status(201).json(atendimento)
    },
    async listarAtendimento(req, res){
        const atendimentos = await Atendimento.findAll({
            include: [
                {
                    model: Psicologo, 
                    attributes : ["nome"]
                },
                {
                    model: Paciente,
                }
            ]
        })
        res.status(200).json(atendimentos)
    },
    async listarAtendimentoid(req,res){
        const {id}=req.params
        const atendimento = await Atendimento.findByPk(id, {
            include: [
                {
                    model: Psicologo, 
                    attributes : ["nome"]
                },
                {
                    model: Paciente,
                }
            ]
            
        })
        res.status(200).json(atendimento)
    }
}

module.exports = atendimentoController;
