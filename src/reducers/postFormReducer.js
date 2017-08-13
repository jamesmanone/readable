import * as types from '../actions/actionTypes';

// This is only part of the store due to project requirements
export default (state={}, action) => {
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
    default:
      return state;
  }
};
