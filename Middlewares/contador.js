let contadorR = 0
const contador = (req,res,next) =>{
    
    console.log(`Haz hecho ${contadorR} peticiones`)
    contadorR++
    next()
}

export default contador