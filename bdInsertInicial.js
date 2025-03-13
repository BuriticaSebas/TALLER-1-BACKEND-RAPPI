import "dotenv/config.js"
import "./conectDatabase/configConnec.js"


//Importamos modelos
import storeModel from "./modules/storeModel.js"
import employeModel from "./modules/employeModel.js"
import productModel from "./modules/productModel.js"



//Importamos Data
import storeData from "./modules/data/storeData.js"
import employeData from "./modules/data/employeData.js"
import productData from "./modules/data/productData.js"


async function insertData(){
    try {

        await storeModel.insertMany(storeData)
        console.log("store ingresó")
        await employeModel.insertMany(employeData)
        console.log("employe ingresó")
        await productModel.insertMany(productData)
        console.log("product ingresó")
    } catch (error) {
        console.log(error)
        
    }
}


insertData()