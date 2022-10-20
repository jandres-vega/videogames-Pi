const { models } = require('../lib/conexion');

class GendersServices {

    async getAllGenres (array) {
        const options = {
            attributes: ['id', 'name_genders'],
        }
        if (array) options.where = {name_genders: array}

        return await models.Genres.findAll(options);
    }
}

module.exports = {GendersServices}