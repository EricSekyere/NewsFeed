import {combineReducers} from 'redux';
import articleReducer from './article';
import sourceReducer from './source';

export default combineReducers({
  articles: articleReducer,
  sources : sourceReducer
})
