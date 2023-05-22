import { combineReducers } from 'redux';
<<<<<<< HEAD
import auth from './auth.js';
import todo from './todo.js';

const rootReducer = combineReducers({
  auth: auth,
  todo: todo
=======
import signup from './signup.js';
import login from './login.js';

const rootReducer = combineReducers({
  signup,
  login
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
});

export default rootReducer;