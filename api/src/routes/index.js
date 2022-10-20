const routerVideoGames = require('./videoGames.routes');
const routerGenders = require('./genders.routes');
const routerPlatforms = require('./platforms.routes');

const router = (app) => {
    app.use('/videoGames', routerVideoGames);
    app.use('/genres', routerGenders);
    app.use('/platforms', routerPlatforms);
}

module.exports = {router}

