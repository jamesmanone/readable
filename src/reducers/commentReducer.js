import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default (state=initialState.comment, action) => {
  switch (action.type) {
    case types.COMMENT_CHANGE_AUTHOR:
      return {...state, author: action.payload};
    case types.COMMENT_CHANGE_COMMENT:
      return {...state, comment: action.payload};
    case types.SUBMIT_COMMENT_FULFILLED:
      return initialState.comment;
    case types.COMMENT_RESET_ALL:
      return initialState.comment;
    default:
      return state;
  }
};
