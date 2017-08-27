import * as types from './actionTypes';
import * as api from '../api';
import store from '../store';

export const changeTitle = title => dispatch =>
  dispatch({type: types.CHANGE_TITLE, payload: title});

export const changeBody = body => dispatch =>
  dispatch({type: types.CHANGE_BODY, payload: body});

export const changeAuthor = author => dispatch =>
  dispatch({type: types.CHANGE_AUTHOR, payload: author});

export const changeCategory = category => dispatch => {
  category = store.getState().categories.categories.filter(cat => cat.id === category)[0];
  dispatch({type: types.CHANGE_CATEGORY, payload: category});
};

export const setPost = post => dispatch =>
  dispatch({type: types.SET_POST, payload: post});

export const submitPost = post => dispatch => {
  dispatch({type: types.SUBMIT_POST_PENDING});
  api.submitPost(post)
    .then(res => dispatch({
      type: types.SUBMIT_POST_FULFILLED,
      payload: res
    }))
    .catch(() => dispatch({type: types.SUBMIT_POST_REJECTED}));
};
