import storeModel from "../../modules/storeModel.js";

const allStores = async (req, res, next) => {
  try {
    let allStores = await storeModel.find();

    return res.status(200).json({ response: allStores });
  } catch (error) {
    next(error);
  }
};

const storesByName = async (req, res, next) => {
  try {
    let nameParamStore = req.params.nameStore;

    if (typeof nameParamStore !== 'string' || !/^[a-zA-Z\s]+$/.test(nameParamStore)) {
        const error = new Error("El nombre debe ser un string con solo letras");
        error.status = 400;
        return next(error);
    }

    let nameStore = await storeModel.find({ name: nameParamStore });

    return res.status(200).json({ response: nameStore });
  } catch (error) {
    next(error);
  }
};

const storesById = async (req, res, next) => {
  console.log("Entro en la funcion");
  try {
    let idParamStore = req.params.idStore;
    let nameStore = await storeModel.findById(idParamStore);

    return res.status(200).json({ response: nameStore });
  } catch (error) {
    next(error);
  }
};

export { allStores, storesByName, storesById };
