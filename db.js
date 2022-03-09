const Sequelize = require('sequelize');

const LibroModel = require('./models/Libro');
const UsuarioModel = require('./models/Usuario');

const sequelize = new Sequelize('mitienda0221','root','',{
    host: 'localhost',
    dialect: 'mysql'
});


const Libro = LibroModel(sequelize, Sequelize);
const Usuario = UsuarioModel(sequelize, Sequelize);

module.exports = {
    Libro,
    Usuario
};
