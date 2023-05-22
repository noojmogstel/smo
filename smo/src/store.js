<<<<<<< HEAD

import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);
=======
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './modules';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunk));
>>>>>>> e86c036dc8b817f4ecbfdd5be98cad1ab17a2261
console.log(store.getState());

export default store;
