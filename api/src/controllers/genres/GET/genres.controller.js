const { GendersServices } = require('../../../services/genres.service');

const genres = new GendersServices();

const getGenres = async (req, res, next ) => {
    try {
        const allGenres = await genres.getAllGenres();
        res.status(200).send(allGenres);
    }catch (e) {
        next(e);
    }
}

module.exports = {getGenres}