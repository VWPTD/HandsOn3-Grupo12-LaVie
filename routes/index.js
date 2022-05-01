const express = require("express");
const PacienteController = require("../controllers/pacienteController");
const PsicologoController = require("../controllers/psicologoController");
const routes = express.Router();

routes.get("/paciente", PacienteController.listarPaciente);
routes.put("/paciente/:id/atualizar", PacienteController.atualizarPaciente);
routes.post("/paciente/cadastrar", PacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", PacienteController.deletarPaciente);

routes.get("/psicologo", PsicologoController.listarPsicologo);
routes.put("/psicologo/:id/atualizar", PsicologoController.atualizarPsicologo);
routes.post("/psicologo/cadastrar", PsicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", PsicologoController.deletarPsicologo);

module.exports = routes;