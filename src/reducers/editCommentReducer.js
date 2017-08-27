import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default (state=initialState.editComment, action) => {
  switch (action.type) {
    case types.EDIT_COMMENT_CHANGE_COMMENT:
      return {
        ...state,
        comment: {
          ...state.comment,
          body: action.payload
        }
      };
    case types.EDIT_COMMENT_CHANGE_AUTHOR:
      return {
        ...state,
        comment: {
          ...state.comment,
          author: action.payload
        }
      };
    case types.EDIT_COMMENT_SET_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
    case types.EDIT_COMMENT_SUBMIT_FULFILLED:
      return initialState.editComment;
    case types.EDIT_COMMENT_CANCELED:
      return initialState.editComment;
    default:
      return state;
  }
};
