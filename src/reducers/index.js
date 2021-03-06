import { combineReducers } from 'redux';
import posts from './postReducer';
import postForm from './postFormReducer';
import categories from './categoriesReducer';
import activePost from './activePostReducer';
import alerts from './alertsReducer';
import comment from './commentReducer';
import editPost from './editPostReducer';
import editComment from './editCommentReducer';
import addCategory from './addCategoryReducer';

export default combineReducers({
  posts,
  postForm,
  categories,
  activePost,
  alerts,
  comment,
  editPost,
  editComment,
  addCategory
});
