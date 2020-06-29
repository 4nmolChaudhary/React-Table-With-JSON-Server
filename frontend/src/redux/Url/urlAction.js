import { URL } from './urlType'

export const fetchUrl = (state) => {
    return {
        type: URL,
        payload: state
    }
}