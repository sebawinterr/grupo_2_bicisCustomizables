const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { check, validationResult, body } = require('express-validator');


// MIDDLEWARES
// Indicamos donde estan los archivos etaticos
app.use(express.static(path.resolve(__dirname,'..','public')));
//Motor de plantillas EJS
app.set('view engine','ejs');
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));
//Usamos middleware de aplicacion para acceder a los datos en sesion
app.use(session({secret: "top secret",
resave: true,
saveUninitialized: true}));
// Hacemos uso de cookie-parser
app.use(cookieParser());

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