import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
Switch,
Link,} from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import './containers/index.css';
import App from './App';
import * as serviceWorker from './containers/serviceWorker';

// const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL
// });
// console.log(history, 'history...')
ReactDOM.hydrate(
  <Router basename={'/'}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
