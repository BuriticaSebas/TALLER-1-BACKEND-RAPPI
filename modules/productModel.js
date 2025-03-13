import { Schema,model } from "mongoose";
import "../conectDatabase/configConnec.js"


const collection = "products"

const schema = Schema(
    {
       name: { type: String, required: true },
        brand: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true } // Indica si el producto está en stock o agotado
    },
    {
        timestamps:true
    }
)

const Product = model(collection, schema)

export  default Product