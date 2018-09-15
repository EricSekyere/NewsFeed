import {GET_ARTICLES, GET_SOURCE_ARTICLES} from './constants';

export const getArticles = () => dispatch => {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(articles => dispatch({
      type: GET_ARTICLES, 
      payload: articles
    }))
    .catch(err => { return err; })
}

export const getSourceArticles = (id) => dispatch => {
  return fetch(`/api/sources/${id}`)
    .then(res => res.json())
    .then(source => dispatch({
      type: GET_SOURCE_ARTICLES,
      payload: source
    }))
    .catch(err => { return err;})
};