const routerVideoGames = require('./videoGames.routes');


const router = (app) => {
    app.use('/videoGames', routerVideoGames);
}

module.exports = {router}