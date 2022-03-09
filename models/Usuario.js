module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        idusuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        password: {
            type: type.STRING(150)
        }

    }, {
        //le decimos que mapee a la tabla libro
        tableName: 'usuario',

        //eliminamos createAt y updateAt
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

};