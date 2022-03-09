const router = require('express').Router();

//cifrado de la clave
const bcrypt = require('bcryptjs');

//usar sequelize
const { Usuario } = require('../../db');

//validacion
const { check, validationResult} = require('express-validator');

//Fechas 
const moment = require('moment');

//Token
const jwt = require('jwt-simple');

//camviar la validacion por un schema
router.post('/registro', 
[
    check("nombres","requerido").not().isEmpty(),
    check("email","requerido").isEmail(),
    check("password","requerido").not().isEmpty()

],
async(req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(402).json({ errors: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const usuario = await Usuario.create(req.body);

    res.status(200).json(usuario);
});

//
router.post('/login', async(req, res) => {
    const usuario  = await Usuario.findOne( { where: { email: req.body.email } });
    
    if(usuario){
        const claveIgual = bcrypt.compareSync(req.body.password, usuario.password);
        
        if(claveIgual){

            res.status(200).json({ success:  crearToken(usuario) } );

        }else{
            res.status(200).json({ errors:  'Error en usuario y/o contraseña' } );
        }

    }else{
        res.status(200).json({ errors:  'Usuario no existe' } );
    }
});

const crearToken = (usuario) =>{
    const payLoad ={
        id: usuario.idusuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix(),

    }

    //poner secret en un .env
    return jwt.encode(payLoad,'123456');
};

module.exports = router;