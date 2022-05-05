const express = require("express");
const loginController = require("../controllers/loginController");
const PacienteController = require("../controllers/pacienteController");
const PsicologoController = require("../controllers/psicologoController");
const AtendimentoController = require("../controllers/atendimentoController");
const cadastroPsicologoValidator = require("../validators/cadastroPsicologoValidator");
const cadastroPacienteValidador = require("../validators/cadastroPacienteValidador");
const loginValidator = require("../validators/loginValidator");
const routes = express.Router();

routes.get("/paciente", PacienteController.listarPaciente);
routes.get("/paciente/:id", PacienteController.listarPaciente);
routes.put("/paciente/:id/atualizar", PacienteController.atualizarPaciente);
routes.post("/paciente/cadastrar", cadastroPacienteValidador,PacienteController.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", PacienteController.deletarPaciente);

routes.get("/psicologo", PsicologoController.listarPsicologo);
routes.get("/psicologo/:id", PsicologoController.listarPsicologo);
routes.put("/psicologo/:id/atualizar", PsicologoController.atualizarPsicologo);
routes.post("/psicologo/cadastrar", cadastroPsicologoValidator, PsicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", PsicologoController.deletarPsicologo);

routes.post("/login", loginValidator, loginController.login);

routes.get("/atendimento", AtendimentoController.listarAtendimento);
routes.get("/atendimento/:id", AtendimentoController.listarAtendimento);
routes.post("/atendimento/cadastrar", AtendimentoController.cadastrarAtendimento);


module.exports = routes;