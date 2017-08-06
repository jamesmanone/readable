import * as types from '../actions/actionTypes';

export default (state={}, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_PENDING:
      return {...state, fetching: true};
    case types.FETCH_POSTS_FULFILLED:
      return {...state, posts: action.payload, fetching: false};
    default:
      return state;
  }
};
