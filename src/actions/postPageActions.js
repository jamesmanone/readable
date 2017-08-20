import * as types from './actionTypes';
import * as api from '../api';
import store from '../store';

export const getPost = postId => {
  return dispatch => {
    const tempPost = store.getState().posts.posts.filter(post => post.id === postId)[0];

    dispatch({type: types.FETCH_POST_PENDING, payload: tempPost});
    api.getPost(postId)
      .then(post =>
        dispatch({type: types.FETCH_POST_FULFILLED, payload: post})
      )
      .catch(() =>
        dispatch({type: types.FETCH_POST_REJECTED})
      );
  };
};
