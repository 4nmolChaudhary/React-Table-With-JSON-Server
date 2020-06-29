import { combineReducers } from 'redux'
import urlReducer from './Url/urlReducer'

const rootReducer = combineReducers({
    url: urlReducer,
})

export default rootReducer