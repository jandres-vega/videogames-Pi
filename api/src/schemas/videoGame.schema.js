const joi = require('joi');

const name_game = joi.string()

const createGame = joi.object({
    name_game,
    description: joi.string().min(10),
    image: joi.string().uri().required(),
    release_date : joi.string(),
    rating: joi.number(),
    genres: joi.array().items(joi.string()).min(1),
    platforms: joi.array().items(joi.string()).min(1),
})

module.exports = {createGame}

