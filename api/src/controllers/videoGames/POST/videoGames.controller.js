const {VideoGamesService} = require('../../../services/videoGames.service');
const videoGame = new VideoGamesService();

const postGame = async (req, res, next) => {
    try {
        const {body}= req;
        const gameCreated = await videoGame.createGameDb(body);
        res.status(200).send(gameCreated);
    }catch (e) {
        next(e);
    }
}

module.exports = {postGame}