import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default (state=initialState.activePost, action) => {
  switch (action.type) {
    case types.FETCH_POST_PENDING:
      return {...state, post: action.payload, fetching: true};
    case types.FETCH_POST_FULFILLED:
      return {...state, post: action.payload, fetching: false};
    case types.FETCH_POST_REJECTED:
      return {...state, fetching: false};
    default:
      return state;
  }
};
