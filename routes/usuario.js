const express = require("express")
const router = express.Router();
const {check } = require ("express-validator")
const usuariosController=require("../controllers/usuarioController");


//creamos un usuario -- api / usuario

router.post(
    "/",[
        check("nombre", "el nombre debe ser obligatorio").not().isEmpty(),
        check("email", "agrege un email valido").isEmail(),
        check("password", "el password debe tener minimo 8 caracteres").isLength({
            min:8}), 
    ],
    usuariosController.crearUsuario
);
module.exports = router;