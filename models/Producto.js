const mongoose = require("mongoose");

// este modelo que vamos a hacer iagual a lo que tenga db

const ProductoSchema = mongoose.Schema({
    dimesiones : {
        type: String,
        required: true
    },
    peso : {
        type: Number,
        required: true
    },
    precio : {
        type: Number,
        required: true
    },
    origen : {
        type: String,
        required: true
    },
    destino : {
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Producto', ProductoSchema)
//models