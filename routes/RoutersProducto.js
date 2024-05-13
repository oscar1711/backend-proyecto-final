const express = require ('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');

router.post('/', productoController.agregarproducto);
router.get('/', productoController.mostrarProducto);
router.get('/:id', productoController.mostrarUnProducto);
router.delete('/:id', productoController.eliminarProducto);
router.put('/:id', productoController.modificarProducto); 

module.exports = router;
//routers