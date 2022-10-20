const axios = require('axios');
const {config} = require('../config/config');
const KEY = config.key;
const API = `https://api.rawg.io/api/games?key=${KEY}&page_size=80`;
const API_GENRES = `https://api.rawg.io/api/genres?key=${KEY}`;
const API_PLATFORMS = `https://api.rawg.io/api/platforms?key=${KEY}`;

async function getAllGamesApi() {

    try {
        const games = (await axios.get(API)).data;

        return games.results.map(item => {
            return {
                id: item.id,
                name_game: item.name,
                image: item.background_image,
                release_date: item.released,
                rating: item.rating,
                genres: item.genres.map(item => item.name),
                platforms: item.platforms.map(item => item.platform.name)
            }
        })
    }catch (e) {
        console.error(e);
    }
}

async function getGameById(id) {
    try {
        const gameId = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`)).data;
        return {
            id: gameId.id,
            name_game: gameId.name,
            description: gameId.description_raw,
            image: gameId.background_image,
            release_date: gameId.released,
            rating: gameId.rating,
            platforms: gameId.platforms.map(item => item.platform.name),
            genres: gameId.genres.map(item => item.name)
        }


    }catch (e) {
        console.error(e);
    }
}

async function getAlGenres() {
    try{
        const allGenders = (await axios.get(API_GENRES)).data
        return  allGenders.results.map(item => {
            return {
                name_genders: item.name
            }
        })
    }catch (e) {
        console.error(e);
    }
}

async function getAllPlatforms() {
    try {
        const allPlatforms = (await axios.get(API_PLATFORMS)).data
        return allPlatforms.results.map(item => {
            return {
                name_platform: item.name
            }
        })
    }catch (e) {
        console.error(e);
    }
}

module.exports = {
    getAllGamesApi,
    getAlGenres,
    getAllPlatforms,
    getGameById
}