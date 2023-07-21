// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import facilitiesReducer from './facilitiesReducer';

const store = createStore(facilitiesReducer, applyMiddleware(thunk));

export default store;
