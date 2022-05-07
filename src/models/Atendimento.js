const db = require("../database");
const { DataTypes } = require("sequelize");
<<<<<<< HEAD
const Psicologo = require("./Psicologo")
const Paciente = require("./Paciente")
const Atendimento = db.define("Atendimento", {
=======
const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");

const Atendimento = db.define("atendimento", {
>>>>>>> d02d5684d478d5130ad69ca8357c3ec580ebbe0f
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
<<<<<<< HEAD
        psicologo_id:{
            type: DataTypes.INTEGER,
            references: {
                model: Psicologo,
                key: "psicologo_id",
            }
        },
        paciente_id:{
            type: DataTypes.INTEGER,
            references:{
                model: Paciente,
                key: "paciente_id",
            }
        },
        data_atendimento:{
            type: DataTypes.DATE
        },
        observacao:{
            type: DataTypes.CHAR(200)
=======
        psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Paciente,
                key: "id"
            },
        },  
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologo,
                key: "id"
            },
        },      
        data_atendimento: {
            type: DataTypes.DATE
        },
        observacao: {
            type: DataTypes.STRING
>>>>>>> d02d5684d478d5130ad69ca8357c3ec580ebbe0f
        },
    },
    {
        tableName: "atendimento",
        timestamps: false,
    }
);


module.exports = Atendimento;