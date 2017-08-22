import * as types from './actionTypes';
import * as api from '../api';
import { pushAlert } from './alertActions';

export const changeComment = comment => {
  return dispatch =>
    dispatch({type: types.COMMENT_CHANGE_COMMENT, payload: comment});
};

export const changeAuthor = author => {
  return dispatch =>
    dispatch({type: types.COMMENT_CHANGE_AUTHOR, payload: author});

};

export const submitComment = comment => {
  return dispatch => {
    dispatch({type: types.SUBMIT_COMMENT_PENDING});
    api.addComment(comment)
      .then(res => {
        dispatch({
          type: types.SUBMIT_COMMENT_FULFILLED,
          payload: res
        });
        pushAlert('success', 'Your comment was posted')(dispatch);
      })
      .catch(e => {
        dispatch({type: types.SUBMIT_COMMENT_REJECTED});
        pushAlert('warning', 'Something\'s gone wrong. :/')(dispatch);
      });
  };
};
