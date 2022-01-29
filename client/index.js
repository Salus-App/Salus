import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';


// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(
  <BrowserRouter>
    {/* <h1>Why does this render but not app</h1> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <Provider store = {store}>
//       <App />
//   </Provider>,
//   document.getElementById('root')
// )