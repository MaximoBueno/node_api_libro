const ajvInstance = require('./ajv-instance');

const schema = {
    type: "object",
    properties: {
        nombres: { type: "string" },
        apellidos: { type: "string" },
        email : { type: "string" },
        password: { type: "string" },
    },
    required: ["nombres","email","password"],
    additionalProperties: false,
}

module.exports = ajvInstance.compile(schema);