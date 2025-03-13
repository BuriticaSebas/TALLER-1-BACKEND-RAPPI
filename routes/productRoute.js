import { Router } from "express";

import { allProducts, productsByName, productsById } from "../controllers/product/read.js";
import { createOneProduct, createManyProduct } from "../controllers/product/create.js";

const productRouter = Router();

productRouter.get("/allProducts", allProducts);

productRouter.get("/byName/:nameProduct", productsByName);

productRouter.get("/byId/:idProduct", productsById);

productRouter.post("/createOneProduct", createOneProduct);
productRouter.post("/createManyProduct", createManyProduct);

export default productRouter;


