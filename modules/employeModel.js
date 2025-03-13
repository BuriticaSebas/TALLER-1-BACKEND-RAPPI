import { Schema,model } from "mongoose";
import "../conectDatabase/configConnec.js"

const colecction = " employees"

const schema = Schema(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        salary: { type: Number, required: true },
        active: { type: Boolean, default: true } 
    }
)


const Employe = model(colecction,schema)

export default Employe