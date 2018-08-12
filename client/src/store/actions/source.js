import {GET_SOURCES} from './constants';
import { error } from 'util';

export const getSources = () => dispatch => {
  return fetch('/api/sources')
    .then(res => res.json())
    .then(sources => dispatch({type: GET_SOURCES, payload: sources}))
    .catch(err =>  {})
}

