import express from "express";
import router from "./routes/index.js";
import db from './config/db.js'; 

const app = express();


// Conectar la base de datos del
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error))


// Definir puerto

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug'); 

// Obtener el año actual 
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agecia de viajes";
    return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar el router para
app.use('/', router);

app.listen(port, host,() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})