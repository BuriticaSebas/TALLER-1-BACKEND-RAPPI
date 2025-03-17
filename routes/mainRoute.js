import { Router } from "express";
import employeRouter from "./employeRoute.js"
import productRoute from "./productRoute.js"
import storeRoute from "./storeRoute.js"


const mainRouter = Router()
mainRouter.get("/", (req,res)=>{
    res.end("Bienvenidos a nuestro minigestor de Empresarial, Aca puedes gestionar Empleados(/employes), Productos (/productos) y tienda(/tienda")
})



mainRouter.use("/employe/", (req,res,next) =>{
    if(req.path === "/"){

        res.end("Estas en la seccion de empleados aca puedes acceder a todos los empleados (/allEmployes) o buscarlos por nombre(/byName/:nameEmploye) o por el id(/byId/idEmploye), tambien podras crear un nuevo empleado (/createEmploye) ")
    }else{

        next()
    }
} , employeRouter)




mainRouter.use("/product", (req, res, next) => {
    if (req.path === "/") {
        res.end("Sección de productos: puedes ver todos (/allProducts), buscarlos por nombre (/byName/:nameStore) o ID (/byId/:idStore), y crear uno nuevo (/createProduct).");
    } else {
        next();
    }
}, productRoute);




mainRouter.use("/store", (req, res, next) => {
    if (req.path === "/") {
        res.end("Sección de tienda: puedes ver todas las tiendas (/allStores), buscarlas por nombre (/nombreStore) o ID (/id), y crear una nueva (/createStore).");
    } else {
        next();
    }
}, storeRoute);



export default mainRouter
