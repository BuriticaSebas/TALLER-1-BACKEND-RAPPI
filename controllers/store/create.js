
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
    return res.status(500).json({
      response: error,
    });
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
      return res.status(500).json({
        response: error,
      });
    }
  };



export  {createOneStore,createManyStore};
