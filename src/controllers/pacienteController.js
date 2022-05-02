const Paciente = require("../models/Paciente");
const { Op } = require("sequelize");


const PacienteController = {
    async listarPaciente(req, res){

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

       const pacientes = await Paciente.findAll(filter);
       res.status(200).json(pacientes);
   },
    async cadastrarPaciente(req, res){

        const { nome, email, data_nasc } = req.body;
        
        const novoPaciente = await Paciente.create({
            nome,
            email: req.body.email,
            data_nasc,
        });

        res.status(201).json("Paciente cadastrada!");
    },
    async atualizarPaciente(req, res) {
        const {id} = req.params;
        const {nome, email, data_nasc} = req.body;

        const atualizarNome = await Paciente.update(
            {
                nome,
                email,
                data_nasc,
            },
            {
                where: {
                    id,
                }
            }
        );       
        const PacienteUpdated = await Paciente.findByPk(id);
        return res.status(200).json(PacienteUpdated);
    },
    async deletarPaciente(req, res) {
        const {id} = req.params;

        await Paciente.destroy({
            
                where: {
                    id,
                }
            
        });
        res.status(204).json("Paciente deletado")
    },
};

module.exports = PacienteController;