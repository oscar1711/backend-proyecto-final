// importamos el modelo
const Producto = require("../models/Producto");

// funcion agrefar Clientes
exports.agregarproducto = async(req, res) => {
    try {
        let producto = new Producto(req.body)
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error)
        res.status(500).send('No se puedo agregar el producto')
    }
} 
exports.mostrarProducto = async (req,res) => {
    try {
        let producto = await Producto.find();
        res.json ({producto});        
    } catch (error) {
        console.log(error)
        res.status(500).send('No se pudo mostrar la lista de productos')
    }
}

//mostrar un cliente
exports.mostrarUnProducto = async(req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto){
            res.status(404).json({msg: "no existe este producto"});
        }
        res.send(producto);       
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar el producto')
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({msg: "El producto no existe"});
        }
        await Producto.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El producto fue eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el producto');
    }
}
exports.modificarProducto = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if (!producto) {
            return res.status(404).send({msg: "El producto no existe"});
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: 'Error al modificar'});
    }
}