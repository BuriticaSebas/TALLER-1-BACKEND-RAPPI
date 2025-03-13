import { Router } from "express";
import { allEmployes, employesByName, employesById } from "../controllers/employe/read.js";
import { createOneEmploye, createManyEmploye } from "../controllers/employe/create.js";

const employeRouter = Router();

employeRouter.get("/allEmployes", allEmployes);


employeRouter.get("/byName/:nameEmploye", employesByName);


employeRouter.get("/byId/:idEmploye", employesById);


employeRouter.post("/createOneEmploye", createOneEmploye);
employeRouter.post("/createManyEmploye", createManyEmploye);


export default employeRouter;
