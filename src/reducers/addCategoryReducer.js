import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';


export default (state=initialState.addCategory, action) => {
  switch(action.type) {
    case types.CHANGE_ADD_CATEGORY:
      return {
        ...state,
        category: {
          name: action.payload
        }
      };
    case types.ADD_CATEGORY_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.ADD_CATEGORY_FULFILLED:
      return initialState.addCategory;
    case types.ADD_CATEGORY_REJECTED:
      return {
        ...state,
        pending: false
      };
    default:
      return state;
  }
};
