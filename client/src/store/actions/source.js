import {GET_SOURCES, GET_SOURCE} from './constants';
import { error } from 'util';

export const getSources = () => dispatch => {
  return fetch('/api/sources')
    .then(res => res.json())
    .then(sources => dispatch({type: GET_SOURCES, payload: sources}))
    .catch(err =>  {})
}

export const getSource = (id) => dispatch =>{
  return fetch('/api/sources/:id')
  .then(res => res.json())
    .then(source => dispatch({ type: GET_SOURCE, payload: source }))
};