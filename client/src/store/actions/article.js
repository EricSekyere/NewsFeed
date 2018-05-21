import {GET_ARTICLES} from './constants';

export const getArticles = () => dispatch => {
  return fetch('/api/articles')
    .then(res => res.json())
    .then(articles => dispatch({type: GET_ARTICLES, payload: articles}))
}
