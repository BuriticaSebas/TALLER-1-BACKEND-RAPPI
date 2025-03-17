const personal = (req, res, next)=>{
    let userAgent = req.headers['user-agent']
    console.log("El cliente que hizo la solicitud es: ", userAgent)
    next()
}

export default personal