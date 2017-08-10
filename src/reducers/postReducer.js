import * as types from '../actions/actionTypes';

export default (state={}, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_PENDING:
      return {...state, fetching: true};
    case types.FETCH_POSTS_FULFILLED:
      return {...state, posts: action.payload, fetching: false};
    case types.SUBMIT_POST_FULFILLED:
      return {...state, posts: [...state.posts, action.payload]};
    default:
      return state;
  }
};
