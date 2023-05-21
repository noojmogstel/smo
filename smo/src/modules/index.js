import { combineReducers } from 'redux';
import signup from './signup.js';
import login from './login.js';

const rootReducer = combineReducers({
  signup,
  login
});

export default rootReducer;