import * as types from './actionTypes';
import * as api from '../api';
import store from '../store';
import { pushAlert } from './alertActions';

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

export const submitPost = history => dispatch => {
  const { title, body, author, category } = store.getState().postForm;
  if(!(title && body && author && category.id)) return pushAlert('danger', 'All fields required')(dispatch);
  dispatch({type: types.SUBMIT_POST_PENDING});
  api.submitPost({title, body, author, category})
    .then(res => {
      dispatch({
      type: types.SUBMIT_POST_FULFILLED,
      payload: res
      });
    pushAlert('success', 'Message posted!')(dispatch);
    history.push('/');
    })
    .catch(() => {
      dispatch({type: types.SUBMIT_POST_REJECTED});
      pushAlert('warning', 'Something went wrong. Please try again')(dispatch);
    });
};
