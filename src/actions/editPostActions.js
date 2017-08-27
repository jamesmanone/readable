import * as api from '../api';
import * as types from './actionTypes';
import store from '../store';
import { pushAlert } from './alertActions';
import { resetOrder } from './postActions';

export const titleChange = title => dispatch =>
  dispatch({type: types.EDIT_CHANGE_TITLE, payload: title});

export const bodyChange = body => dispatch =>
  dispatch({type: types.EDIT_CHANGE_BODY, payload: body});

export const authorChange = author => dispatch =>
  dispatch({type: types.EDIT_CHANGE_AUTHOR, payload: author});

export const categoryChange = categoryId => dispatch => {
  const category = store.getState().categories.categories.filter(cat => cat.id === categoryId)[0];
  dispatch({type: types.EDIT_CHANGE_CATEGORY, payload: category});
};

export const setPost = post => dispatch =>
  dispatch({type: types.EDIT_SET_POST, payload: post});

export const submitForm = (post, history) => dispatch => {
  api.editPost(post)
    .then(post => {
      dispatch({type: types.EDIT_SUBMIT_FULLFILLED, payload: post});
      pushAlert('success', 'Post Updated')(dispatch);
      resetOrder(dispatch);
      history.push(`/post/${post.id}`);
    })
    .catch(() => pushAlert('danger', 'There was a problem updating the post'));
};

export const getPost = postId => dispatch =>
  api.getPost(postId)
    .then(post =>
      dispatch({type: types.EDIT_GET_POST_FULLFILLED, payload: post})
    )
    .catch(() => pushAlert('danger', 'Post not found!')(dispatch));
