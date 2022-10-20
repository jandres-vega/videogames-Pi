const {Router} = require('express');
const {createGame} = require('../schemas/videoGame.schema');
const { validatorHandler } = require('../middlewares/validator.handler');

const {
    getAllGamesDbApi,
    getGameById
} = require('../controllers/videoGames/GET/videoGames.controller');

const {postGame} = require('../controllers/videoGames/POST/videoGames.controller');

const router = Router();

router.get('/', getAllGamesDbApi);
router.get('/:id', getGameById);
router.post('/',validatorHandler(createGame, 'body'), postGame);

module.exports = router;
