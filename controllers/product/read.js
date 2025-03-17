import productModel from "../../modules/productModel.js";

const allProducts = async (req, res, next) => {
    try {
        let allProducts = await productModel.find();
        return res.status(200).json({ response: allProducts });
    } catch (error) {
        next(error)
    }
};

const productsByName = async (req, res, next) => {
    try {
        let nameParamProduct = req.params.nameProduct;
        
        if (typeof nameParamProduct !== 'string' || !/^[a-zA-Z\s]+$/.test(nameParamProduct)) {
            const error = new Error("El nombre debe ser un string con solo letras");
            error.status = 400;
            return next(error);
        }
        let nameProduct = await productModel.find({ name: nameParamProduct });
        return res.status(200).json({ response: nameProduct });
    } catch (error) {
        next(error)
    }
};

const productsById = async (req, res, next) => {
    try {
        let idParamProduct = req.params.idProduct;
        
        let product = await productModel.findById(idParamProduct);
        return res.status(200).json({ response: product });
    } catch (error) {
        next(error)
    }
};

export { allProducts, productsByName, productsById };

