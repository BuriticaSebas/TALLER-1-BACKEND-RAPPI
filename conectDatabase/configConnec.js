import mongoose from "mongoose";

const url = process.env.URL_MONGO

mongoose.connect(url)
.then(() => console.log("conexion mela"))
.catch(error => console.log(error))


