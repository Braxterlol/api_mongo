const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    productoid: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
        enum: ['a', 'b'] // Asegura que el tipo sea solo 'a' o 'b'
    },
    created_at: {
        type: Date,
        required: false,
        default: new Date()
    },
    updated_at: {
        type: Date,
        required: false,
        default: null
    },
    deleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    deleted_at: {
        type: Date,
        required: false,
        default: null,
    },
});

module.exports = mongoose.model('Producto', productoSchema);
