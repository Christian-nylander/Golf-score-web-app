import { combineReducers } from 'redux';
import postReducer from './postReducer';
import testar from './testar';

export default combineReducers({
  posts: postReducer,
  testar: testar
});
