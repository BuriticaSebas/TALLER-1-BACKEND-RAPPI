import { Schema, model } from "mongoose";
import "../conectDatabase/configConnec.js"

let colecction = "stores";


let schema = Schema({
name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  open: { type: Boolean, default: true }, 
},{
    timestamps:true
});


const Store = model(colecction,schema)

export default Store