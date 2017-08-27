import * as api from '../api';
import * as types from './actionTypes';
import store from '../store';
import { pushAlert } from './alertActions';

export const getAllCategories = () => dispatch => {
  dispatch({type: types.FETCH_CATEGORIES_PENDING});
  api.getCategories()
    .then(res => dispatch({type: types.FETCH_CATEGORIES_FULFILLED, payload: res}))
    .catch(e => dispatch({type: types.FETCH_CATEGORIES_REJECTED}));
};

export const changeCategory = category => dispatch =>
  dispatch({type: types.CHANGE_ADD_CATEGORY, payload: category});

export const addCategory = () => dispatch => {
  const category = store.getState().addCategory.category;
  if(!category.name) return pushAlert('danger', 'Please enter a category')(dispatch);
  dispatch({type: types.ADD_CATEGORY_PENDING});
  api.newCategory(category)
    .then(newCategory => {
      pushAlert('success', 'Category added')(dispatch);
      dispatch({type: types.ADD_CATEGORY_FULFILLED, payload: newCategory});
    })
    .catch(() => {
      pushAlert('danger', 'Something\'s gone wrong. Please try again.')(dispatch);
      dispatch({type: types.ADD_CATEGORY_REJECTED});
    });
};
