import { combineReducers } from 'redux';
import auth from './auth.js';
import todo from './todo.js';

const rootReducer = combineReducers({
  auth: auth,
  todo: todo
});

export default rootReducer;