import * as types from './actionTypes';
import * as api from '../api';
import store from '../store';
import { pushAlert } from './alertActions';

export const getPost = postId => {
  return dispatch => {
    const tempPost = store.getState().posts.posts.filter(post => post.id === postId)[0];
    if(tempPost) dispatch({type: types.FETCH_POST_PENDING, payload: tempPost});
    api.getPost(postId)
      .then(post =>
        dispatch({type: types.FETCH_POST_FULFILLED, payload: post})
      )
      .catch(() => {
        dispatch({type: types.FETCH_POST_REJECTED});
        pushAlert('danger', 'Something went wrong :/')(dispatch);
      });
  };
};
