const Usuario = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const {validationResult}= require("express-validator");
const jwt = require ("jsonwebtoken");

exports.autenticarusuario = async (req,res) => {
    // revisar si tenemos errores

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }
    const {email, password} = req.body;
    try {
        let usuario = await Usuario.findOne({email});
        if (!usuario){
            return res.status(400).json({msg: "El usuario no esta registrado"});
        }
        //revisamos el password
        const passCorrect = await bcryptjs.compare(password, usuario.password);
        if (!passCorrect){
            return res.status(400).json({msg: "La contraseña es incorrecta"});
        }

        // si todo esta bien
        const payload = {
            usuario:{id: usuario.id},
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 43200, //1 hora
            },
            (error, token) => {
                if(error) throw error;
                //mensaje de confirmacion
                res.json({token});
            }
        );
    } catch (error) {
        console.log("hubo un error")
        console.log(error);
        return res.status(400).send("hubo un error")
    }

};
exports.usuarioAutentificado = async (req,res) => {
    try {
        const usuario = await Usuario.findbyId(req.usuario.id);
        res.json({usuario});
    } catch (error) {
        res.status(400).json({msg: "hubo un error"});        
    }
    
}
