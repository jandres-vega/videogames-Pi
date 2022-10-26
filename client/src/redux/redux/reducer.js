import {act} from "react-dom/test-utils";

const initialState = {
    allGenres: [],
    allPlatforms: [],
    copyGames: [],
    allGames: []
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_GENRES':
            return {
                ...state,
                allGenres: action.payload
            }
        case 'GET_PLATFORMS':
            return {
                ...state,
                allPlatforms: action.payload
            }
        case 'GET_GAMES':
            return {
                ...state,
                allGames: action.payload,
                copyGames: action.payload
            }
        case 'ORDER_GAMES':
            return {
                ...state,
            }
        case 'FILTER_BY_GENRES':
            const gameFilter = state.copyGames.filter(game => {
                if(!game.genres) return undefined
                return game.genres && game.genres.includes(action.value);
            })
            return {
                ...state,
                allGames: gameFilter
            }
        case 'FILTER_BY_PLATFORM':
            console.log(action.value)
            const gameFilterPlatform = state.copyGames.filter(game => {
                if (!game.platforms) return undefined
                return game.platforms && game.platforms.includes(action.value);
            })
            return {
                ...state,
                allGames: gameFilterPlatform
            }
        default :
            return state
    }
}

