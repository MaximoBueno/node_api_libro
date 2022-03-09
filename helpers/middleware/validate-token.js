const jwt = require('jwt-simple');
const moment = require('moment');


const validateToken = (req, res, next) => {
    
    if(!req.headers['usuario-token']){

        return res.status(404).json({ errors:  'Token no existe' } );
    }

    const usuarioToken = req.headers['usuario-token'];

    let payLoad = {};

    try{
        payLoad = jwt.decode(usuarioToken, '123456');
    }catch(err){
        return res.status(404).json({ errors:  'Token invalido' } );
    }

    if(payLoad.expireAt < moment().unix()){
        return res.status(404).json({ errors:  'Token expirado' } );
    }

    console.log("usuario id: " , payLoad.id);

    next();

};

module.exports = validateToken;