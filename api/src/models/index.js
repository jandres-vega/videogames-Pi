const {VideoGames, schemaVideoGame} = require('./db/videogames.models');
const {Platforms, schemaPlatform} = require('./db/platforms.models');
const {Genders, schemaGenders} = require('./db/genders.models');

const setupModels = (sequelize) => {

    VideoGames.init(schemaVideoGame, VideoGames.config(sequelize));
    Platforms.init(schemaPlatform, Platforms.config(sequelize));
    Genders.init(schemaGenders, Genders.config(sequelize));

    VideoGames.associated(sequelize.models);
    Platforms.associated(sequelize.models);
    Genders.associated(sequelize.models);
}


module.exports = {setupModels}