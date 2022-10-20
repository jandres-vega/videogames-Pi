const boom = require('@hapi/boom');

function validatorHandler(schemas, property) {
    return function (req, res, next) {
        const data = req[property];
        const {error} = schemas.validate(data, {abortEarly: false});
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = {validatorHandler}