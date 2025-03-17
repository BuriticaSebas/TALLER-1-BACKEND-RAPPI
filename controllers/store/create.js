
import storeModel from "../../modules/storeModel.js";


let createOneStore= async (req, res, next) => {
    
  try {
    let storeInfo = req.body

    console.log(storeInfo);

    let storeCreated = await storeModel.create(storeInfo);

    return res.status(201).json({
      response: storeCreated,
    });

  } catch (error) {
    next(error)
  }
};


let createManyStore= async (req, res, next) => {
    
    try {
      let storeInfo = req.body
  
      console.log(storeInfo);
      let storeCreated = await storeModel.insertMany(storeInfo);
  
      return res.status(201).json({
        response: storeCreated,
      });
  
    } catch (error) {
      next(error)
    }
  };



export  {createOneStore,createManyStore};
