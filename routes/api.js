const router = require('express').Router();

const apiLibrosRouter = require('./api/libros');
const apiUsuariosRouter = require('./api/usuarios');

//token
const midToken = require('../helpers/middleware/validate-token');

router.use('/libros', midToken, apiLibrosRouter);
router.use('/usuarios', apiUsuariosRouter);


module.exports = router;