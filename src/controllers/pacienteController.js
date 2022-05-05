const Paciente = require("../models/Paciente");
const { Op } = require("sequelize");


const PacienteController = {
    async listarPaciente(req, res){

        try{
            const { page = 1 } = req.query;   
            const { id } = req.params;

            const limit = 10;
            const offset = parseInt(limit) * (parseInt(page) - 1); 
            let filter = {
                limit: parseInt(limit), 
                offset,
                atrributes: ["nome"],
            };             

            if (id) {
                Object.assign(filter, {
                    where: {               
                    id,
                    },
                });
                }       

            const pacientes = await Paciente.findAll(filter);
            res.status(200).json(pacientes);
        } catch {
            console.log("Id não encontrado");
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
   },

    async cadastrarPaciente(req, res){
        try{
            const { nome, email, data_nasc } = req.body;
            
            const novoPaciente = await Paciente.create({
                nome,
                email,
                data_nasc,
            });

            res.status(201).json("Paciente cadastrado!");
        }catch{
            console.log("Falha na requiseção");
            console.error(error);
            return res.status(400).json("Falha na requiseção");
        }
    },
    async atualizarPaciente(req, res) {
        try{
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
        } catch{
            console.log("Falha na requiseção");
            console.error(error);
            return res.status(400).json("Falha na requiseção");
        }        
    },

    async deletarPaciente(req, res) {
        try{
            const {id} = req.params;

            await Paciente.destroy({
                
                    where: {
                        id,
                    }
                
            });
            res.status(204).json("Paciente deletado");
        } catch {
            console.log("Id não encontrado");
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    },
};

module.exports = PacienteController;