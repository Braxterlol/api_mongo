const productoModel = require('../models/producto.model');

const index = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (page - 1) * limit;

        const productos = await productoModel.find({ deleted: false }).skip(skip).limit(limit);

        let response = {
            message: "Se obtuvieron los productos correctamente",
            data: productos
        };

        if (page && limit) {
            const totalProductos = await productoModel.countDocuments({ deleted: false });
            const totalPages = Math.ceil(totalProductos / limit);
            const currentPage = parseInt(page);

            response = {
                ...response,
                total: totalProductos,
                totalPages,
                currentPage,
            };
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener los productos",
            error: error.message
        });
    }
};

const getById = async (req, res) => {
    try {
        const productoId = req.params.id;
        const producto = await productoModel.findById(productoId);

        if (!producto) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            message: "Producto obtenido exitosamente",
            producto
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al obtener el producto",
            error: error.message
        });
    }
};

const create = async (req, res) => {
    try {
        const nuevoProducto = new productoModel(req.body);
        await nuevoProducto.save();

        return res.status(201).json({
            message: "Producto creado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Falló al crear el producto",
            error: error.message
        });
    }
};

const updateParcial = async (req, res) => {
    try {
        const productoId = req.params.id;
        const datosActualizar = {
            ...req.body,
            updated_at: new Date()
        };

        const productoActualizado = await productoModel.findByIdAndUpdate(productoId, datosActualizar);

        if (!productoActualizado) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            message: "Producto actualizado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al editar el producto",
            error: error.message
        });
    }
};

const deleteLogico = async (req, res) => {
    try {
        const productoId = req.params.id;
        const productoEliminado = await productoModel.findByIdAndUpdate(productoId, { deleted: true, deleted_at: new Date() });

        if (!productoEliminado) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            message: "Producto eliminado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al eliminar el producto",
            error: error.message
        });
    }
};

const deleteFisico = async (req, res) => {
    try {
        const productoId = req.params.id;
        const productoEliminado = await productoModel.findByIdAndDelete(productoId);

        if (!productoEliminado) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            message: "Producto eliminado exitosamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrió un error al eliminar el producto",
            error: error.message
        });
    }
};

module.exports = {
    index,
    getById,
    create,
    deleteLogico,
    updateParcial,
    deleteFisico
};
