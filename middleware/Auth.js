const jwt = require ("jsonwebtoken");

module.exports = function (req,res,port){

    //se valeer el token del header
    const token = req.header("x-auth-token");

    // revisamos si tenemos token
    if (!token){
        return res.status(400).json({msg: "permiso no tiene token"});
    }

    // validar el token
    try {
        const cifrado = jwt.verify(token.process.env.SECRETA)
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(400).json({msg: "token no valido"});
    }
};