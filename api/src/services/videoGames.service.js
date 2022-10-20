const {models} = require('../lib/conexion');
const boom = require('@hapi/boom');
const {GendersServices} = require('./genres.service');
const {PlatformsService} = require('./platforms.service');
const {getAllGamesApi, getGameById} = require('./getAllGames');
const {Genres} = require("../models/db/genders.models");
const {Platforms} = require("../models/db/platforms.models");

const serviceGenres = new GendersServices();
const servicePlatform = new PlatformsService();

class VideoGamesService {

    async getAllGamesDb() {
        let arrayAux = []
        const infoGames = await models.VideoGames.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    model:Genres,
                    attributes: ['id', 'name_genders'],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Platforms,
                    attributes: ['id', 'name_platform'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        infoGames.forEach(item => {
            arrayAux.push({
                id: item.id,
                name_game: item.name_game,
                description: item.description,
                image: item.image,
                release_date: item.release_date,
                rating: item.rating,
                genres: item.Genres.map(item => item.name_genders),
                platforms: item.Platforms.map(item => item.name_platform)
            })
        })
        return arrayAux;
    }

    async getAllGames() {
        const games = await getAllGamesApi();
        const gamesDb = await this.getAllGamesDb();
        return games.concat(gamesDb);
    }

    async getGameById(id) {
        if (id.length < 8){
            const gameId = await getGameById(id);
            if(!gameId){
                throw new boom.notFound('Videojuego no encontrado')
            }else {
                return gameId
            }
        }else {
            const allGames = await this.getAllGamesDb();
            const gameIdDb = allGames.filter(game => game.id === id);
            if(gameIdDb.length === 0){
                throw new boom.notFound('Videojuego no encontrado')
            }else {
                return gameIdDb
            }
        }
    }

    async createGameDb(body) {
        const games = await this.getAllGames()
        const {
            name_game,
            image,
            genres,
            platforms
        } = body;
        let allGenres = await serviceGenres.getAllGenres(genres)
        let allPlatforms = await servicePlatform.getAllPlatforms(platforms);

        const game = games.find(item => item.name_game === name_game || item.image === image);
        if(game) {
            return 'El videojuego ya ha sido creado!'
        }
        else {
            const game = await models.VideoGames.create(body)
            game.addGenres(allGenres)
            game.addPlatforms(allPlatforms);
            return game

        }
    }
}

module.exports ={VideoGamesService}