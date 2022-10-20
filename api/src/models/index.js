const {VideoGames, schemaVideoGame} = require('./db/videogames.models');
const {Platforms, schemaPlatform} = require('./db/platforms.models');
const {Genres, schemaGenders} = require('./db/genders.models');

const setupModels = (sequelize) => {

    VideoGames.init(schemaVideoGame, VideoGames.config(sequelize));
    Platforms.init(schemaPlatform, Platforms.config(sequelize));
    Genres.init(schemaGenders, Genres.config(sequelize));

    VideoGames.associated(sequelize.models);
    Platforms.associated(sequelize.models);
    Genres.associated(sequelize.models);
}


module.exports = {setupModels}