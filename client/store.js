import { createStore } from 'redux';
import appReducer from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(appReducer, composeWithDevTools())

export default store;