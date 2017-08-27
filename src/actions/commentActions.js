import * as types from './actionTypes';
import * as api from '../api';
import { pushAlert } from './alertActions';
import { resetOrder } from './postActions';

export const changeComment = comment => dispatch =>
  dispatch({type: types.COMMENT_CHANGE_COMMENT, payload: comment});

export const changeAuthor = author => dispatch =>
  dispatch({type: types.COMMENT_CHANGE_AUTHOR, payload: author});

export const submitComment = comment => dispatch => {
  dispatch({type: types.SUBMIT_COMMENT_PENDING});
  api.addComment(comment)
    .then(res => {
      dispatch({
        type: types.SUBMIT_COMMENT_FULFILLED,
        payload: res
      });
      pushAlert('success', 'Your comment was posted')(dispatch);
    })
    .catch(() => {
      dispatch({type: types.SUBMIT_COMMENT_REJECTED});
      pushAlert('warning', 'Something\'s gone wrong. :/')(dispatch);
    });
};

export const upVoteComment = comment => dispatch =>
  api.upVoteComment(comment.id)
    .then(res => {
      dispatch({
        type: types.UPVOTE_COMMENT_FULLFILLED,
        payload: res
      });
      resetOrder(dispatch);
    });

export const downVoteComment = comment => dispatch =>
  api.downVoteComment(comment.id)
    .then(res => {
      dispatch({
        type: types.DOWNVOTE_COMMENT_FULLFILLED,
        payload: res
      });
      resetOrder(dispatch);
    });

export const deleteComment = comment => dispatch =>
  api.deleteComment(comment.id)
    .then(() => {
      dispatch({
        type: types.DELETE_COMMENT_FULFILLED,
        payload: comment.id
      });
      resetOrder(dispatch);
      pushAlert('success', 'Comment deleted. Hope it was yours!')(dispatch);
    });
