const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologo = require("./Psicologo")
const Paciente = require("./Paciente")
const Atendimento = db.define("Atendimento", {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
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
        },
    },
    {
        tableName: "atendimento",
        timestamps: false,
    }
);


module.exports = Atendimento;