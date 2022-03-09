const router = require('express').Router();
//validar el esquema de la tabla libros
const validateDto = require('../../helpers/middleware/validate-dto');
const libroSchema = require('../../helpers/schema/libro');

//usar sequelize
const { Libro } = require('../../db');


//--> api/libros
router.get('/', async (req, res) => {
    const libros = await Libro.findAll();
    res.json(libros);
});

//--> api/libros/
router.post('/', validateDto(libroSchema) ,async (req, res) => {
    //res.json(req.body);
    const libro = await Libro.create(req.body);
    res.status(200).json(libro);
});

//--> api/libros/id
router.put('/:idLibro', validateDto(libroSchema), async(req, res) => {

    const idLibro = req.params.idLibro;
    console.log(idLibro);

    if(idLibro){

        await Libro.update(req.body, {
            where: { idlibro: idLibro}
        });

        res.status(200).json();
    }
});

//--> api/libros/id
router.delete('/:idLibro', async(req, res) => {

    const idLibro = req.params.idLibro;
    console.log(idLibro);

    if(idLibro){

        await Libro.destroy({
            where: { idlibro: idLibro}
        });

        res.status(200).json();
    }
});

module.exports = router;