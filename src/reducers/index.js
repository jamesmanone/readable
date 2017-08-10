import { combineReducers } from 'redux';
import posts from './postReducer';
import postForm from './postFormReducer';
import categories from './categoriesReducer';

export default combineReducers({
  posts,
  postForm,
  categories
});
