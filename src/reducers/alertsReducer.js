import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default (state=initialState.alerts, action) => {
  switch (action.type) {
    case types.PUSH_ALERT:
      return [...state, action.payload];
    case types.POP_ALERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};
