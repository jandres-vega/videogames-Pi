const {app} = require('./app');
const {sequelize} = require("./lib/conexion");
const { getAlGenres, getAllPlatforms } = require('../src/services/getAllGames');
const {config} = require('./config/config');
const {Genders, Platforms}= sequelize.models;

sequelize.sync({force: false}).then(async () => {

    const genders = await getAlGenres();
    const platforms = await getAllPlatforms();
    genders.forEach(item => {
        Genders.findOrCreate({
            where: {name_genders: item.name_genders}
        })
    });
    platforms.forEach(item => {
        Platforms.findOrCreate({
            where: {name_platform: item.name_platform}
        })
    })

    app.listen(config.port, async() => {
        console.log("listen on port " + config.port)
    })
});