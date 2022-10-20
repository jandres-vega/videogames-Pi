const {PlatformsService} = require('../../../services/platforms.service');

const platform = new PlatformsService();

const getPlatforms = async (req, res, next) => {
    try {
        const platformDb = await platform.getAllPlatforms();
        res.status(200).send(platformDb);
    }catch (e) {
        next(e);
    }
}

module.exports = {getPlatforms}