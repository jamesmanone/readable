import * as api from '../api';
import * as types from './actionTypes';
import { pushAlert } from './alertActions';
import store from '../store';

export const changeComment = comment => dispatch =>
  dispatch({type: types.EDIT_COMMENT_CHANGE_COMMENT, payload: comment});

export const changeAuthor = author => dispatch =>
  dispatch({type: types.EDIT_COMMENT_CHANGE_AUTHOR, payload: author});

export const setComment = comment => dispatch =>
  dispatch({type: types.EDIT_COMMENT_SET_COMMENT, payload: comment});

export const cancelEditComment = comment => dispatch =>
  dispatch({type: types.EDIT_COMMENT_CANCELED, payload: comment});

export const submitEditComment = () => dispatch => {
  const { comment } = store.getState().editComment;
  if(!(comment.id && comment.body && comment.author))
    return pushAlert('danger', 'All fields are required')(dispatch);
  dispatch({type: types.EDIT_COMMENT_SUBMIT_PENDING});
  api.editComment(comment)
    .then(comment => {
      pushAlert('success', 'Comment updated')(dispatch);
      dispatch({
        type: types.EDIT_COMMENT_SUBMIT_FULFILLED,
        payload: comment
      });
    })
    .catch(() => {
      pushAlert('danger', 'There was an error updating the post')(dispatch);
      dispatch({type: types.EDIT_COMMENT_SUBMIT_REJECTED});
    });
};
