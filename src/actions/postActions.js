import * as types from './actionTypes';
import * as api from '../api';

export const getAllPosts = () => {
  return dispatch => {
    dispatch({type: types.FETCH_POSTS_PENDING});
    api.getAll()
      .then(res => dispatch({
                    type: types.FETCH_POSTS_FULFILLED,
                    payload: res
                  }))
      .catch(e => dispatch({type: types.FETCH_POSTS_REJECTED}));
  };
};
