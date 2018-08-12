import {GET_SOURCES} from '../actions/constants'

const sourceReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_SOURCES:
        return payload
      default:
        return state
    }
}

export default sourceReducer;
