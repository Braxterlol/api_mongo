const path = require('path');
const fs = require('fs');

const mostrarArchivo = async (req, res) => {
    try {
        const { nombreArchivo } = req.params;
        const pathArchivo = path.join(__dirname, '../../uploads', nombreArchivo);

        if (!fs.existsSync(pathArchivo)) {
            return res.status(404).json({
                message: "el archivo no existe"
            });
        }

        return res.sendFile(pathArchivo);
    } catch(error) {
        return res.status(500).json({
            message: "ocurrió un error al obtener el archivo"
        })
    }
}

module.exports = {
    mostrarArchivo
}