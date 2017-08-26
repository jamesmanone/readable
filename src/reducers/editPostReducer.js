import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default (state=initialState.editPost, action) => {
  switch (action.type) {
    case types.EDIT_CHANGE_TITLE:
      return {
        ...state,
        post: {
          ...state.post,
          title: action.payload
        }
      };
    case types.EDIT_CHANGE_BODY:
      return {
        ...state,
        post: {
          ...state.post,
          body: action.payload
        }
      };
    case types.EDIT_CHANGE_AUTHOR:
      return {
        ...state,
        post: {
          ...state.post,
          author: action.payload
        }
      };
    case types.EDIT_CHANGE_CATEGORY:
      return {
        ...state,
        post: {
          ...state.post,
          category: action.payload
        }
      };
    case types.EDIT_SET_POST:
      return {
        ...state,
        post: action.payload
      };
    case types.EDIT_SUBMIT_FULLFILLED:
      return initialState.editPost;
    default:
      return state;
  }
};
