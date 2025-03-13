import employeModel from "../../modules/employeModel.js";

const allEmployes = async (req, res, next) => {
    try {
        let allEmployes = await employeModel.find();
        return res.status(200).json({ response: allEmployes });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

const employesByName = async (req, res, next) => {
    try {
        let nameParamEmploye = req.params.nameEmploye;
        console.log(nameParamEmploye)
        let nameEmploye = await employeModel.find({ name: nameParamEmploye });
        return res.status(200).json({ response: nameEmploye });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

const employesById = async (req, res, next) => {
    try {
        let idParamEmploye = req.params.idEmploye;
        let employe = await employeModel.findById(idParamEmploye);
        return res.status(200).json({ response: employe });
    } catch (error) {
        return res.status(500).json({ response: error });
    }
};

export { allEmployes, employesByName, employesById };
