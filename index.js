const express = require("express");
const conectarBD = require("./config/db")
const cors = require("cors");



const app = express();

const PORT = process.env.PORT || 5000;

//enlazamos la conexion de la base de datos
conectarBD();
app.use(cors());
app.use(express.json({ extebded : true }))

//creamos la rutas del modulo
app.use("/api/usuarios", require("./routes/usuario"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/clientes", require('./routes/RoutersCliente'));
app.use("/api/producto", require('./routes/RoutersProducto'));



//config del servidor

app.listen(PORT, () => {
    console.log("el servidor esta conectado")
})