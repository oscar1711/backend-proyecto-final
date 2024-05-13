const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authControllers")
const auth = require("../middleware/Auth")

// autentificar el usuario

router.post(
    "/", [
    check("email", "digite un email valido").isEmail(),
    check("password", "el password debe tener minimo 8 caracteres").isLength({
        min: 8,
    }),
],
    authController.autenticarusuario
);

router.get("/", auth, authController.usuarioAutentificado);

module.exports = router;