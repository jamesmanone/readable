import * as api from '../api';
import * as types from './actionTypes';
import { pushAlert } from './alertActions';
import { resetOrder } from './postActions';

export const titleChange = title => dispatch =>
  dispatch({type: types.EDIT_CHANGE_TITLE, payload: title});

export const bodyChange = body => dispatch =>
  dispatch({type: types.EDIT_CHANGE_BODY, payload: body});

export const authorChange = author => dispatch =>
  dispatch({type: types.EDIT_CHANGE_AUTHOR, payload: author});

export const categoryChange = category => dispatch =>
  dispatch({type: types.EDIT_CHANGE_CATEGORY, payload: category});

export const setPost = post => dispatch =>
  dispatch({type: types.EDIT_SET_POST, payload: post});

export const submitForm = post => dispatch =>
  api.editPost(post)
    .then(post => {
      dispatch({type: types.EDIT_SUBMIT_FULLFILLED, payload: post});
      pushAlert('success', 'Post Updated')(dispatch);
      resetOrder(dispatch);
    })
    .catch(() => pushAlert('danger', 'There was a problem updating the post'));
