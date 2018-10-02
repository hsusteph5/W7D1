import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Selector from './reducers/selectors.js';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore(); //configure store returns store obj
  ReactDOM.render(
    <Root store={store}/>, root
  );
});

window.store = configureStore();
