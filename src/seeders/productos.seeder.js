require('dotenv').config();
require('../configs/db.config');

const Producto = require('../models/producto.model');
const mongoose = require('mongoose');

const productos = [
    {
        productoid: "producto1",
        nombre: "Producto 1",
        descripcion: "Descripción del Producto 1",
        precio: 10.99,
        tipo: "a",
    },
    {
        productoid: "producto2",
        nombre: "Producto 2",
        descripcion: "Descripción del Producto 2",
        precio: 15.99,
        tipo: "b",
    },
    {
        productoid: "producto3",
        nombre: "Producto 3",
        descripcion: "Descripción del Producto 3",
        precio: 20.49,
        tipo: "a",
    },
    {
        productoid: "producto4",
        nombre: "Producto 4",
        descripcion: "Descripción del Producto 4",
        precio: 12.99,
        tipo: "b",
    },
    {
        productoid: "producto5",
        nombre: "Producto 5",
        descripcion: "Descripción del Producto 5",
        precio: 8.99,
        tipo: "a",
    },
    {
        productoid: "producto6",
        nombre: "Producto 6",
        descripcion: "Descripción del Producto 6",
        precio: 17.99,
        tipo: "b",
    },
    {
        productoid: "producto7",
        nombre: "Producto 7",
        descripcion: "Descripción del Producto 7",
        precio: 22.99,
        tipo: "a",
    },
    {
        productoid: "producto8",
        nombre: "Producto 8",
        descripcion: "Descripción del Producto 8",
        precio: 9.99,
        tipo: "b",
    },
    {
        productoid: "producto9",
        nombre: "Producto 9",
        descripcion: "Descripción del Producto 9",
        precio: 14.99,
        tipo: "a",
    },
    {
        productoid: "producto10",
        nombre: "Producto 10",
        descripcion: "Descripción del Producto 10",
        precio: 11.49,
        tipo: "b",
    },
];

Producto.deleteMany({})
    .then(() => {
        return Producto.insertMany(productos);
    })
    .then(() => {
        console.log("10 productos creados");
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
        mongoose.connection.close();
    });
