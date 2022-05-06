const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologo = db.define("Psicologo", {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING,
            
        },
        apresentacao: {
            type: DataTypes.STRING
        },
    },
    {
        tableName: "Psicologo",
        timestamps: false,
    }
);


module.exports = Psicologo;