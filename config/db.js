const mongoose = require("mongoose");
require('dotenv').config();

// funcion para hacer la conexion

const conectarBD = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectado con mongoDB"))
    .catch((err) => console.error(err));

}

module.exports = conectarBD;