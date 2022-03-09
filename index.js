const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

const apiRouter = require('./routes/api');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);

//Prueba de Squeelize
/*app.get('', async (req, res) =>{
    //res.send("holitas");
    const libros = await Libro.findAll();
    res.json(libros);
});*/

app.listen(9191, () => {
    console.log("Funciona!");
});