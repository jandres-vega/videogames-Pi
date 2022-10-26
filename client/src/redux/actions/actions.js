import axios from 'axios';

export const getAllGenres = () => {
    return async function (dispatch) {
        let allGenres = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: 'GET_GENRES',
            payload: allGenres.data
        })
    }
}

export const getAllPlatforms = () => {
    return async function (dispatch) {
        let allPlatforms = await axios.get(`http://localhost:3001/platforms`);
        return dispatch({
            type: 'GET_PLATFORMS',
            payload: allPlatforms.data
        })
    }
}

export  const getAllGames = () => {
    return async function (dispatch) {
        let allGames = await axios.get(`http://localhost:3001/videoGames`);
        return dispatch({
            type: 'GET_GAMES',
            payload: allGames.data
        })
    }
}

export const filterByGenres = (value) => {
    return {
        type: 'FILTER_BY_GENRES',
        value
    }
}

export const filterByPlatform = (value) => {
    console.log(value)
    return {
        type: 'FILTER_BY_PLATFORM',
        value
    }
}

export const orderGames = (value) => {
    return {
        type: 'ORDER_GAMES',
        payload: value
    }
}
