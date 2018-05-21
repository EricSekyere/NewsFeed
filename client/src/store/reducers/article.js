import {GET_ARTICLES} from '../actions/constants'

const articleReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_ARTICLES:
        return payload
      default:
        return state
    }
}

export default articleReducer;
