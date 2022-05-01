const express = require("express");
const PacienteController = require("../controllers/pacienteController");
const routes = express.Router();

routes.get("/paciente", PacienteController.listarPaciente);
routes.put("/paciente/:id/atualizar", PacienteController.atualizarPaciente);
routes.post("/paciente/cadastrar", PacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", PacienteController.deletarPaciente);

module.exports = routes;