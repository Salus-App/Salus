import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'
import store from './store.js'


// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <Provider store = {store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// )