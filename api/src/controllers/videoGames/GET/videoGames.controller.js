const {VideoGamesService} = require('../../../services/videoGames.service');
const videoGame = new VideoGamesService();

const getAllGamesDbApi = async (req, res, next) => {
    try {
        const {name} = req.query;
        const allGames = await videoGame.getAllGames();
        if (name) {
            const gameByName = allGames.filter(game => game.name_game.toLowerCase().includes(name.toLowerCase()));
            if (gameByName.length === 0) {
                res.status(404).send('No se encontro ningun VideoGame con ese nombre');
            }else {
                res.status(200).send(gameByName);
            }
        }else {
            res.status(200).send(allGames);
        }
    }catch (e) {
        next(e);
    }
}

const getGameById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const getGamId = await videoGame.getGameById(id);
        res.send(getGamId);
    }catch (e) {
        next(e);
    }
}

module.exports = {getAllGamesDbApi, getGameById}