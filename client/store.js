import { createStore } from 'redux';
import appReducer from './appReducer';


const store = createStore(appReducer)

export default store;