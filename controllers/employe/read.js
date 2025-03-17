import employeModel from "../../modules/employeModel.js";

const allEmployes = async (req, res, next) => {
    try {
        let allEmployes = await employeModel.find();
        return res.status(200).json({ response: allEmployes });
    } catch (error) {
        next(error)
    }
};

const employesByName = async (req, res, next) => {
    try {
        let nameParamEmploye = req.params.nameEmploye;
        console.log(nameParamEmploye)
        let nameEmploye = await employeModel.find({ name: nameParamEmploye });
        return res.status(200).json({ response: nameEmploye });
    } catch (error) {
        next(error)
    }
};

const employesById = async (req, res, next) => {
    try {
        let idParamEmploye = req.params.idEmploye;
        // if (isNaN(idParamEmploye)) {
        //     const error = new Error("El ID debe ser un número");
        //     error.status = 400; 
        //     throw error;
        //   }
        let employe = await employeModel.findById(idParamEmploye);
        return res.status(200).json({ response: employe });
    } catch (error) {
        next(error)
    }
};

export { allEmployes, employesByName, employesById };
