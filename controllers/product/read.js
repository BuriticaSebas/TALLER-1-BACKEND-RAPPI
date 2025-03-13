import productModel from "../../modules/productModel.js";

const allProducts = async (req, res, next) => {
    try {
        let allProducts = await productModel.find();
        return res.status(200).json({ response: allProducts });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

const productsByName = async (req, res, next) => {
    try {
        let nameParamProduct = req.params.nameProduct;
        let nameProduct = await productModel.find({ name: nameParamProduct });
        return res.status(200).json({ response: nameProduct });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

const productsById = async (req, res, next) => {
    try {
        let idParamProduct = req.params.idProduct;
        let product = await productModel.findById(idParamProduct);
        return res.status(200).json({ response: product });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

export { allProducts, productsByName, productsById };

