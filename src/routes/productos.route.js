const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.get('/', authMiddleware.verificarJWT, productosController.index);
router.get('/:id', authMiddleware.verificarJWT, productosController.getById);
router.post('/', authMiddleware.verificarJWT, productosController.create);
router.delete('/:id', authMiddleware.verificarJWT, productosController.deleteLogico);
router.patch('/:id', authMiddleware.verificarJWT, productosController.updateParcial);

module.exports = router;
