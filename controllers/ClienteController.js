// importamos el modelo
const Cliente = require("../models/Cliente");

// funcion agrefar Clientes
exports.agregarClientes = async(req, res) => {
    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('error al agregar un cliente')
    }
} 
exports.mostrarClientes = async (req,res) => {
    try {
        let clientes = await Cliente.find();
        res.json ({clientes});        
    } catch (error) {
        console.log(error)
        res.status(500).send('error al mostrar los clientes')
    }
}

//mostrar un cliente
exports.mostrarUnCliente = async(req,res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes){
            res.status(404).json({msg: "no se encuentra el clientes"});
        }
        res.send(clientes);       
    } catch (error) {
        console.log(error)
        res.status(500).send('error al buscar un cliente')
    }
}
// eliminar un cliente
exports.eliminarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({msg: "El cliente no existe"});
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente fue eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar un cliente');
    }
}
exports.modificarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if (!cliente) {
            return res.status(404).send({msg: "El cliente no existe"});
        }
        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'Error al modificar'});
    }
}/* 
exports.actualizarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({msg: "El cliente no existe"});
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente fue eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar un cliente');
    }
}
exports.ActualizarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({msg: "El cliente no existe"});
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente fue eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar un cliente');
    }
}
controller
 */
