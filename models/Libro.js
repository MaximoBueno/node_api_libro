module.exports = (sequelize, type) => {
    return sequelize.define('libro', {
        idlibro: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: type.STRING
        },
        descripcion: {
            type: type.STRING
        }

    }, {
        //le decimos que mapee a la tabla libro
        tableName: 'libro',

        //eliminamos createAt y updateAt
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

};