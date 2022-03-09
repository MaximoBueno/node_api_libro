const ajvInstance = require('./ajv-instance');

const schema = {
    type: "object",
    properties: {
        titulo: { type: "string" },
        slug: { type: "string" },
        descripcion: { type: "string" },
        precio: { type: "number" },
    },
    required: ["titulo","descripcion"],
    additionalProperties: false,
}

module.exports = ajvInstance.compile(schema);