import {GET_SOURCES, GET_SOURCE} from '../actions/constants'

const sourceReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_SOURCE:
      case GET_SOURCES:
        return payload
      default:
        return state
    }
}

export default sourceReducer;
