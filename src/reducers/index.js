import { combineReducers } from 'redux';
import posts from './postReducer';
import postForm from './postFormReducer';

export default combineReducers({
  posts,
  postForm
});
