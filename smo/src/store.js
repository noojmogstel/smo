
import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);
console.log(store.getState());

export default store;
