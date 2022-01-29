import { createStore } from 'redux';
import appReducer from './appReducer';


const store = configureStore({reducer : appReducer});

export default store;