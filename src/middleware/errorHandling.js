const {UnauthorizedError} = require('express-jwt')
const { ValidationError } = require("express-validation");

function errorHandling(error,req,res,next){
    if(error instanceof ValidationError){
    return res.status(400).json(error);
    }
    else if(error instanceof UnauthorizedError){
        return res.status(403).json("Acesso negado")
    }
     return res.status(500).json(error);

}

module.exports = errorHandling;