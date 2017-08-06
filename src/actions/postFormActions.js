import * as types from './actionTypes';
import * as api from '../api';

export const changeTitle = title => {
  return dispatch =>
    dispatch({type: types.CHANGE_TITLE, payload: title});
};

export const changeBody = body => {
  return dispatch =>
    dispatch({type: types.CHANGE_BODY, payload: body});
};

export const changeAuthor = author => {
  return dispatch =>
    dispatch({type: types.CHANGE_AUTHOR, payload: author});
};

export const changeCategory = category => {
  return dispatch =>
    dispatch({type: types.CHANGE_CATEGORY, payload: category});
};

export const setPost = post => {
  return dispatch =>
    dispatch({type: types.SET_POST});
};
