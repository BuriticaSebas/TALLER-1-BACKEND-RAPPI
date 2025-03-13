import storeModel from "../../modules/storeModel.js"

const allStores = async (req,res,next)=>{

    try {

        let allStores = await storeModel.find()

        return res.status(200).json(
            {response: allStores}
        )
        
    } catch (error) {
        return res.status(500).json(
            {response: error}
        )
    }

}

const storesByName = async (req,res,next)=>{

    try {
        
        let nameParamStore = req.params.nameStore
       

        let nameStore = await storeModel.find({name: nameParamStore})

    

        return res.status(200).json(

            {response:nameStore}
        )
        
    } catch (error) {
        return res.status(500).json(
            {response: error}
        )
    }

}


const storesById = async (req,res,next)=>{
    console.log("Entro en la funcion")
    try {

        let idParamStore =  req.params.idStore
        console.log("este es el id ", idParamStore)

        let nameStore = await storeModel.findById(idParamStore);

        return res.status(200).json(
            {response:nameStore}
        )
        
    } catch (error) {
        return res.status(500).json(
            {response: error}
        )
    }

}


export {allStores, storesByName, storesById}
