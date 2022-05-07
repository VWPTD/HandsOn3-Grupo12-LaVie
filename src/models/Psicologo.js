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
<<<<<<< HEAD
        tableName: "psicologo",
=======
        tableName: "Psicologo",
>>>>>>> d02d5684d478d5130ad69ca8357c3ec580ebbe0f
        timestamps: false,
    }
);


module.exports = Psicologo;