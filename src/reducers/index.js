import {combineReducers} from 'redux'
import {gamesReducer} from './gamesReducer'
import {detailsReducer} from './detailReducer'


const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailsReducer
})

export default rootReducer