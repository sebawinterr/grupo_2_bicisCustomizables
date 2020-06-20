const express = require('express');
const app = express();
const path = require('path');

// Indicamos donde estan los archivos etaticos
app.use(express.static(path.resolve(__dirname,'..','public')));

// Requerimos las rutas
const webRoutes = require('./routes/web.js');
const userRoutes = require('./routes/user.js');
const productosRoutes = require('./routes/productos.js');
const carritoRoutes = require('./routes/carrito.js');
const adminRoutes = require('./routes/admin.js');

// Usamos las rutas
app.use(webRoutes);
app.use(userRoutes);
app.use(productosRoutes);
app.use(carritoRoutes);
app.use(adminRoutes);

// Levantamos el Servidor
app.listen(3000, 'localhost', () => console.log('Servidor corriendo en el puerto 3000'));