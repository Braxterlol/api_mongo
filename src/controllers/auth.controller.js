const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/producto.model');

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const usuarioEncontrado = await usuarioModel.findOne({email});
        if (!usuarioEncontrado) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }

        const passwordCorrecto = bcrypt.compareSync(password, usuarioEncontrado.password);
        if (!passwordCorrecto) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }

        const payload = {
            usuario: {
                id: usuarioEncontrado._id
            }
        }

        const token = jwt.sign(payload, 'mi-palabra-secreta', {expiresIn: '1h'});

        return res.status(200).json({
            message: "acceso correcto",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al validar credenciales",
            error: error.message
        });
    }
}

module.exports = {
    login
}