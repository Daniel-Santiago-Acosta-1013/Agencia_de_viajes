import express from "express";
import router from "./routes/index.js";

const app = express();


// Definir puerto
const port = process.env.PORT || 4000;

// Agregar el router para
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})