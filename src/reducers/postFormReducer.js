import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

// This is only part of the store due to project requirements
export default (state=initialState.postForm, action) => {
  switch (action.type) {
    case types.CHANGE_TITLE:
      return {...state, title: action.payload};
    case types.CHANGE_BODY:
      return {...state, body: action.payload};
    case types.CHANGE_AUTHOR:
      return {...state, author: action.payload};
    case types.CHANGE_CATEGORY:
      return {...state, category: action.payload};
    case types.SET_POST:
      return {...state, ...action.payload};
    case types.SUBMIT_POST_FULFILLED:
      return initialState.postForm;
    default:
      return state;
  }
};
