const {models} = require('../lib/conexion');

class PlatformsService {

    async getAllPlatforms(array) {

        const options = {
            attributes: ['id', 'name_platform'],
        }
        if (array) options.where = {name_platform: array}
        return await models.Platforms.findAll(options);

    }
}

module.exports = {PlatformsService}