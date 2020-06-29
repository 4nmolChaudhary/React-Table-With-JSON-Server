import { URL } from './urlType'

const initialState = {
    url: `http://localhost:3004/shipments`
}

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case URL: return {
            ...state,
            url: `${state.url.slice(0, 31)}${action.payload}`
        }
        default: return state
    }
}

export default urlReducer
