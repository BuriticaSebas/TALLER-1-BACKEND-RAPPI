import { Router } from "express";
import {allStores,storesByName,storesById} from "../controllers/store/read.js"
import {createOneStore, createManyStore} from "../controllers/store/create.js"

const storeRouter = Router();

storeRouter.get("/allStores", allStores);

storeRouter.get("/byName/:nameStore",  storesByName);

storeRouter.get("/byId/:idStore", storesById );

storeRouter.post("/createOneStore", createOneStore );
storeRouter.post("/createManyStore", createManyStore)

export default storeRouter;

  