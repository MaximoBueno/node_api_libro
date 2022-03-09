const Ajv = require('ajv');
const addFormats = require('ajv-formats');

//const ajvInstance = new Ajv({ allErrors: true });
const ajvInstance = new Ajv();
addFormats(ajvInstance);

module.exports = ajvInstance;
