import * as api from '../api';
import * as types from './actionTypes';

export const getAllCategories = () => {
  return dispatch => {
    dispatch({type: types.FETCH_CATEGORIES_PENDING});
    api.getCategories()
      .then(res => dispatch({type: types.FETCH_CATEGORIES_FULFILLED, payload: res}))
      .catch(e => dispatch({type: types.FETCH_CATEGORIES_REJECTED}));
  };
};
