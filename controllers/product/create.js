import productModel from "../../modules/productModel.js";

let createOneProduct = async (req, res, next) => {
    try {
        let productInfo = req.body;
        console.log(productInfo);
        let productCreated = await productModel.create(productInfo);
        return res.status(201).json({ response: productCreated });
    } catch (error) {
        next(error)
    }
};



let createManyProduct = async (req, res, next) => {
    try {
        let productInfo = req.body;
        
        console.log(productInfo);
        let productCreated = await productModel.insertMany(productInfo);
        return res.status(201).json({ response: productCreated });
    } catch (error) {
        next(error)
    }
};

export { createOneProduct, createManyProduct };
