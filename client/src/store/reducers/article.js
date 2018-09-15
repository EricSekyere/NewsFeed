import {GET_ARTICLES, GET_SOURCE_ARTICLES} from '../actions/constants'

const articleReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_ARTICLES:
      case GET_SOURCE_ARTICLES:
        return payload;
      default:
        return state;
    }
}

export default articleReducer;
