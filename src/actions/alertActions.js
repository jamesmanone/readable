import * as types from './actionTypes';

export const pushAlert = (style, text) => dispatch => {
  const id = Math.floor(Math.random()*10000);
  window.setTimeout(() => popAlert(id)(dispatch), 7000);
  return dispatch({
    type: types.PUSH_ALERT,
    payload: {style, text, id}
  });
};

export const popAlert = id => dispatch =>
  dispatch({
    type: types.POP_ALERT,
    payload: id
  });
