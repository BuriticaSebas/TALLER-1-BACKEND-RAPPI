import express from "express";
import 'dotenv/config.js'
import morgan from "morgan";
import cors from "cors"
import mainRoute from "./routes/mainRoute.js"
import personal from "./Middlewares/personal.js"
import error404 from "./Middlewares/error404.js";
import error400 from "./Middlewares/error400.js";
import error500 from "./Middlewares/error500.js";
import contador from "./Middlewares/contador.js";

//Definicion del puerto
const port = process.env.PORT

//Levantamiento de server
const server = express()

//Middlewares 
server.use(express.urlencoded({extended:true})) //Analiza datos de formularios codificados en URL entrantes
server.use(express.json()) //Convierte datos JSON que llegan (como en peticiones de una API) en algo que el servidor puede entender y usar.
server.use(cors()) // Habilita el uso compartido de recursos entre dominios (CORS).
server.use(morgan('dev')) //: Registra solicitudes HTTP en modo desarrollo para depuración.

server.use(contador)
server.use(personal)



server.use("/", mainRoute)
server.use(error404)
server.use(error400)
server.use(error500)


//Habilitando el puerto de escucha 
server.listen(port, ()=>{
    console.log(`Estoy escuchando en el puerto ${port}`)
})

