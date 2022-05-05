const db = require("../database");
const { DataTypes } = require("sequelize");
const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");

const Atendimento = db.define("atendimento", {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
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
        },
    },
    {
        tableName: "atendimento",
        timestamps: false,
    }
);


module.exports = Atendimento;