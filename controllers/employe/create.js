import employeModel from "../../modules/employeModel.js";

let createOneEmploye = async (req, res, next) => {
    try {
        let employeInfo = req.body;
        console.log(employeInfo);
        let employeCreated = await employeModel.create(employeInfo);
        return res.status(201).json({ response: employeCreated });
    } catch (error) {
        next(error)
    }
};

let createManyEmploye = async (req, res, next) => {
    try {
        let employeInfo = req.body;
        console.log(employeInfo);
        let employeCreated = await employeModel.insertMany(employeInfo);
        return res.status(201).json({ response: employeCreated });
    } catch (error) {
        next(error)
    }
};

export { createOneEmploye, createManyEmploye };

