require('dotenv').config();
require('./src/configs/db.config');

const express = require('express');
const app = express();
const productosRouter = require('./src/routes/productos.route'); 
const authRouter = require('./src/routes/auth.route');
const uploadsRouter = require('./src/routes/uploads.route');

app.use(express.json());
app.use('/productos', productosRouter); // Cambiamos la ruta base para los productos
app.use('/uploads', uploadsRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000; // También puedes mantener el puerto 3000 como valor predeterminado
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
