import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default (state=initialState.categories, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_FULFILLED:
      return {...state, categories: action.payload, fetching: false};
    case types.FETCH_CATEGORIES_PENDING:
      return {...state, fetching: true};
    case types.FETCH_CATEGORIES_REJECTED:
      return {...state, fetching: false};
    case types.ADD_CATEGORY_FULFILLED:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    default:
      return state;
  }
};
